import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
<header>
  <img class="thumbnail" alt="Banner of LB Web Developers" src="/assets/banner.jpg">
</header>
<main class="main" role="main">
  <general-section>
    <mark-lite class="section-text" text="${self.about}"></mark-lite>
    <section class="section-members">
    <h1 class="members"> Members: </h1>
    <div class="div-members">
      ${self.members.length ? html`
        ${self.members.map(members => html`
          <span class="thumbnail-space">
              <image class="thumbnail-members" alt="${members.alt}" src="/assets/images/${members.alt}.jpg"> </image>
          </span>
        `)}
      ` : html`
      `}
    </div>
    </section>
  </general-section>
  <footer>
    <h1>LB Web Dev Group </h1>
    <div class = "spacer"> </div>
    <a href="https://www.facebook.com/groups/LB.WebDev/">
    <image class ="logo" alt="fb account" src="/assets/images/fb-logo.svg">
    </a>
    <a href="https://www.facebook.com/groups/LB.WebDev/">
    <image class ="logo" alt="ig account" src="/assets/images/ig-logo.svg">
    </a>
  </footer>
</main>
`;

export { template };
