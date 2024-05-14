import { parseCookies, setCookie } from "nookies";

export function setHooksInsideCookies(hooks: number[]) {
  setCookie(null, "hooks", JSON.stringify(hooks), {
    maxAge: 90 * 24 * 60 * 60, // 3 months in seconds
    path: "/"
  });
}

export function addHookToCookies(hookId: number) {
  const cookies = parseCookies();
  const hooks = JSON.parse(cookies.hooks ?? "[]") as number[];
  const newHooks = hooks.includes(hookId) ? hooks : [hookId, ...hooks].slice(0, 4);

  setHooksInsideCookies(newHooks);
}
