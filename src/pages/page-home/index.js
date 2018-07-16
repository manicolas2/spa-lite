import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'page-home'; }

  constructor () {
    super();
    this.__data = {
      about: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare tincidunt cursus. Vestibulum ut tincidunt tortor, non facilisis ante. Vestibulum pulvinar et metus nec sodales. Nam viverra sem eget leo lobortis, a malesuada felis fringilla.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare tincidunt cursus. Vestibulum ut tincidunt tortor, non facilisis ante. Vestibulum pulvinar et metus nec sodales. Nam viverra sem eget leo lobortis, a malesuada felis fringilla.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare tincidunt cursus. Vestibulum ut tincidunt tortor, non facilisis ante. Vestibulum pulvinar et metus nec sodales. Nam viverra sem eget leo lobortis, a malesuada felis fringilla.'
      ],
      topics: [
        'Building Backend Node JS Using Fastify',
        'Fastify and Mongoose',
        'Project Management',
        'SPA-Lite',
        'The 12 Factor App'
      ],
      members: [
        'TJ Monserrat',
        'Sonny Maniaol',
        'Mylah Anacleto',
        'Zydrick Delima',
        'Gauven Pascua'
      ]
    };
  }

  set about (about) {
    this.__data['about'] = about;
    this.invalidate();
  }

  get about () {
    return this.__data['about'];
  }

  set topics (topics) {
    this.__data['topics'] = topics;
    this.invalidate();
  }

  get topics () {
    return this.__data['topics'];
  }

  set members (members) {
    this.__data['members'] = members;
    this.invalidate();
  }

  get members () {
    return this.__data['members'].sort();
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
