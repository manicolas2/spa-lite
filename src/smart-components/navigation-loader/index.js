import { ElementLiteStatic } from '@littleq/element-lite';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteStatic(HTMLElement) {
  static get is () { return 'navigation-loader'; }

  static get properties () {
    return {
      navigation: {
        type: Array,
        observer: '_setNavigation',
        value: [
          {
            label: 'Home',
            href: '/'
          },
          {
            label: 'About',
            href: '/#about'
          },
          {
            label: 'Members',
            href: '/#members'
          },
          {
            label: 'Topics',
            href: '/#topics'
          }
        ]
      }
    };
  }

  render () {
    return `<slot></slot>`;
  }

  _setNavigation (navigation) {
    const navComponent = this.querySelector('header-navigation') || this.querySelector('side-navigation');
    if (navComponent) {
      navComponent.navigation = navigation;
    }
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
