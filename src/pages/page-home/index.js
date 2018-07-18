import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { updateState } from '../../utils/ui-state.js';
import { template } from './template.js';
import style from './style.styl';
import '../../components/mark-lite/index.js';
import '../../components/general-section/index.js';
const { HTMLElement, customElements, fetch } = window;

class Page extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'page-home'; }

  constructor () {
    super();
    this.__data = {
      members: []
    };
    this.location = window.location.hostname === 'localhost' ? '' : '';
  }

  connectedCallback () {
    super.connectedCallback();
    const location = this.location;
    this.fetchAbout(location);
    this.fetchMembers(location);
    if (window.gtag) {
      window.gtag('config', window.gaId, {
        'page_title': 'Homepage',
        'page_path': '/'
      });
    }
  }

  async fetchAbout (location) {
    this.about = await fetch(`${location}/data/about.md`).then(result => result.text());
  }

  async fetchMembers (location) {
    this.members = await fetch(`${location}/data/members.json`).then(result => result.json());
  }

  set about (about) {
    this.__data['about'] = about;
    this.invalidate();
  }

  get about () {
    updateState('currentProgress', 'loaded');
    return this.__data['about'];
  }

  set members (members) {
    this.__data['members'] = members;
    this.invalidate();
  }

  get members () {
    updateState('currentProgress', 'loaded');
    return this.__data['members'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Page.is);

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
