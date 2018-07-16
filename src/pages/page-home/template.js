import { html } from '@littleq/element-lite';

const template = (self) => html`
<main>
  <img class="thumbnail" alt="Banner of LB Web Developers" src="/assets/banner.jpg">
  <section>
    <mark-lite class="section-about">
      <h1 id="about"> About LB Web Developers </h1>
      ${self.about.length ? html`
        ${self.about.map(i => html`
          <p> ${i} </p>
        `)}
      ` : html`
      `}
      <p id="topics">
        <h1>Topics discussed: </h1>
        <ul>
        ${self.topics.length ? html`
          ${self.topics.map(i => html`
            <li> ${i} </li>
          `)}
        ` : html`
        `}
        </ul>
      </p>
    </mark-lite>
  </section>
  <section class="section-members">
    <h1 id="members"> Members: </h1>
    <div>
      ${self.members.length ? html`
        ${self.members.map(i => html`
          <span id="thumbnail-space">
            <a href=#>
              <image class="thumbnail-members" alt="${i}" src="/assets/images/${i}.jpg"> </image>
            </a>
          </span>
        `)}
      ` : html`
      `}
    </div>
  </section>
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
