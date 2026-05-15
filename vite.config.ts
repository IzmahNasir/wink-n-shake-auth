// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to Vercel, set DEPLOY_TARGET=vercel.
// Locally / on Lovable preview, the default Cloudflare target is used.
const isVercel =
  process.env.DEPLOY_TARGET === "vercel" ||
  process.env.VERCEL === "1" ||
  !!process.env.VERCEL_ENV;

export default isVercel
  ? defineConfig({
      // Disable the Cloudflare plugin on Vercel — TanStack Start's vercel
      // target produces a Node serverless function in .vercel/output.
      cloudflare: false,
      tanstackStart: {
        target: "vercel",
        server: { entry: "server" },
      },
    })
  : defineConfig({
      tanstackStart: {
        server: { entry: "server" },
      },
    });
