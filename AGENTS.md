# AGENTS.md — js-url-gen (`@cloudinary/url-gen`)

## What this package is (one line)
Browser-safe, framework-agnostic builder for Cloudinary image and video **delivery/transformation URLs** — returns strings, holds no `API_SECRET`, and has no upload or admin surface.

## When to use this / when NOT to use this
- **Use this when:** you are generating optimized image/video delivery URLs in any JS/TS **frontend** (resize, crop, `f_auto`, `q_auto`) and only need to *display* media.
- **Do NOT use this when:** you need to *upload* assets, call the Admin API, or sign URLs — that work needs a server secret and belongs in [`cloudinary`](https://github.com/cloudinary/cloudinary_npm) (`cloudinary_npm`). Never ship an `API_SECRET` to a browser bundle.
- **Sibling packages:**
  - React / Angular / Vue components → [`@cloudinary/react` · `@cloudinary/ng` · `@cloudinary/vue`](https://github.com/cloudinary/frontend-frameworks). They build *on top of* this package — same URL builder underneath. (The Angular package is `@cloudinary/ng`; `@cloudinary/angular` on npm is an abandoned beta.)
  - Server-side upload / admin / signed URLs → [`cloudinary_npm`](https://github.com/cloudinary/cloudinary_npm). This package is its mirror image: same platform, opposite side of the network boundary.
  - No-code / autonomous agent path → the [Cloudinary MCP servers](https://github.com/cloudinary/mcp-servers).
  - Transformation actions live in the [`@cloudinary/transformation-builder-sdk`](https://github.com/cloudinary/js-transformation-builder-sdk) dependency (see gotchas).

## Setup
```bash
npm install @cloudinary/url-gen
```
No credentials required at install or runtime — only a public `cloudName`. There is **no** `API_SECRET` config; if you reach for one, you are in the wrong package (see above).

## Minimal runnable example
```javascript
import {Cloudinary} from '@cloudinary/url-gen';
import {Resize} from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({cloud: {cloudName: 'demo'}, url: {secure: true}});

const img = cld.image('sample');
img.resize(Resize.scale().width(100).height(100));

console.log(img.toURL());
// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
```
Use `cld.video(...)` for video; both expose `.toURL()`.

## Build / test commands (run these after editing)
```bash
npm install
npm run lint          # eslint src + __TESTS__ (.ts) — runs lint:src then lint:test
npm run test          # build → tsc type-check → build → jest --coverage → bundle-size check
npm run build         # bash ./scripts/build.sh — full dist (ESM + rollup + entrypoints)
```
Faster inner loops while iterating:
```bash
npm run test:unit             # jest only, no build/coverage/size gates
npm run test:unit:watch       # jest --watch
npm run test:types            # tsc --project tsconfig.test.json
```
CI runs on Travis (`.travis.yml`) only — there is no `.github/workflows`. It runs exactly `npm run lint` then `npm run test` on Node **14** and **16** (Node 18 is present but commented out as not yet supported).

## Conventions & gotchas
- **Source is TypeScript** under `src/`; lint is `eslint --ext .ts`. Prettier is a devDependency — match existing formatting.
- **`npm run test` is heavy** — it builds twice, type-checks, runs coverage, and enforces a bundle-size budget (`test:size` / `bundlewatch`). For quick checks use `npm run test:unit`. Bundle size is a hard concern here: this package is tree-shakeable ES modules and ships **untranspiled ES6** on purpose. Don't add transpilation or pull in dependencies that bloat dist.
- **Tree-shakeable imports.** Import each action from its own deep path (`@cloudinary/url-gen/actions/resize`), not a barrel — deep `exports` are defined in `package.json`. Preserve that shape when adding modules.
- **Transformations live in the dependency.** `@cloudinary/transformation-builder-sdk` ships as a dependency and owns every transformation action. You can import them from `@cloudinary/url-gen/actions/*` (re-exported, as docs show) or directly from `@cloudinary/transformation-builder-sdk/actions/*`. Behavior changes to a transformation may belong in that repo, not this one.
- **No upload/admin code belongs here.** This SDK only emits URL strings. Keep the secret-free, browser-safe boundary intact — no `fetch` to authenticated endpoints, no secrets.
- **Consumers testing with Jest** need `babel-jest` transforms for `@cloudinary/url-gen` + `@cloudinary/transformation-builder-sdk` (they ship untranspiled). That's a downstream gotcha, not a repo build step — keep the dist untranspiled.

## Canonical docs (leave the repo for depth)
- URL-Gen integration guide: https://cloudinary.com/documentation/javascript_integration
- URL-Gen SDK reference: https://cloudinary.com/documentation/sdks/js/url-gen/index.html
- Transformation Builder reference: https://cloudinary.com/documentation/sdks/js/transformation-builder/index.html
- Image / video transformations: https://cloudinary.com/documentation/javascript_image_transformations · https://cloudinary.com/documentation/javascript_video_transformations
- MCP servers (agent / no-code path): https://github.com/cloudinary/mcp-servers

## Agent / MCP note
For autonomous task execution prefer the [Cloudinary MCP servers](https://github.com/cloudinary/mcp-servers); use this SDK when **generating frontend code** that builds delivery URLs. This package never uploads or administers assets — route those tasks to the MCP server or `cloudinary_npm`.

## Commit / PR conventions
- Run `npm run lint` and `npm run test` locally before opening a PR — these are the exact CI gates.
- A `.github/pull_request_template.md` exists; fill it out. Maintainer review is required before merge.
- Releases are handled by maintainers via `release-it` (`npm run release`) — do not bump the version manually in a PR.
