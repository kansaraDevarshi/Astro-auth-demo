import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderHead, j as renderComponent } from '../astro_BOitPHcH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession } from './__C2wNOeEP.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  return renderTemplate`<head>${session ? renderTemplate`${maybeRenderHead()}<p>Welcome ${sessionStorage.user.name}</p>` : renderTemplate`<p>Not logged in</p>`}${renderHead()}</head> <body> <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <button id="login">Login</button> <button id="logout">Logout</button>  </main> ${renderComponent($$result, "Footer", Footer, {})} </body>`;
}, "/home/devarshi/workspace/astro-auth-demo/src/pages/index.astro", void 0);

const $$file = "/home/devarshi/workspace/astro-auth-demo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
