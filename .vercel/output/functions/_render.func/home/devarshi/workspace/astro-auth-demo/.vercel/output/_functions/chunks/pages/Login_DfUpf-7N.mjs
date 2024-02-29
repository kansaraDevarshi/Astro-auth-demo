import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_BOitPHcH.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate(_a || (_a = __template(["<!-- ---\nimport signIn from 'auth-astro';\nimport Google from '@auth/core/providers/google';\n---\n\n<script>\nasync function handleLogin() {\n    try {\n      await signIn(Google);\n      window.location.href = '/about';\n    } catch (error) {\n      console.error('Login error:', error);\n    }\n  }\n  \n<\/script> -->"])));
}, "/home/devarshi/workspace/astro-auth-demo/src/pages/Login.astro", void 0);

const $$file = "/home/devarshi/workspace/astro-auth-demo/src/pages/Login.astro";
const $$url = "/Login";

export { $$Login as default, $$file as file, $$url as url };
