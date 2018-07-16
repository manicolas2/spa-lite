import { html } from '@littleq/element-lite';

const template = (self) => html`
  <aside class="sidebar">
    <h1 class="title">
      <a href="http://localhost:3474/">
        <image class="logo" alt="demo logo" src="/assets/images/LBWDG.jpg"> </image>
      </a>
    </h1>
    <div class="spacer">
    </div>
    <navigation-loader>
      <side-navigation on-close-sidebar=${self.close.bind(self)}>
      </side-navigation>
    </navigation-loader>
  </aside>
`;

export { template };
