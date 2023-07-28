import { createHead } from "unhead";

export function useMainHeadMeta(app) {
  // Create a global head instance
  const head = app.use(createHead());

  return { head };
}
