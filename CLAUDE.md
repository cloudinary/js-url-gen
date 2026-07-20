@AGENTS.md

# CLAUDE.md — js-url-gen

## What this repo is

`js-url-gen` is the browser-safe TypeScript library for building Cloudinary image and video delivery URLs. It returns URL strings, ships no credentials, and has no upload or admin surface. Published as `@cloudinary/url-gen`.

## Key constraints

- **No `API_SECRET` here.** This SDK is browser-safe by design. Anything requiring a secret (uploads, Admin API, signed URLs) belongs in `cloudinary_npm`.
- **Import from deep paths, not the barrel.** `import {fill} from '@cloudinary/url-gen/actions/resize'` works; `import {fill} from '@cloudinary/url-gen'` throws "not exported". Deep `exports` paths are declared in `package.json`.
- **Transformation actions live in a dependency.** `@cloudinary/transformation-builder-sdk` owns every action. Import from `@cloudinary/url-gen/actions/*` (re-exported) or directly from `@cloudinary/transformation-builder-sdk/actions/*` — both resolve to the same code.
- **Source is TypeScript** under `src/`; lint requires `eslint --ext .ts`. Match existing Prettier formatting.
- **`npm run test` is heavy** — build twice, tsc type-check, jest --coverage, and a bundle-size gate. Use `npm run test:unit` for inner-loop feedback.
- **Bundle size is a hard constraint.** The package ships untranspiled ES6 modules for tree-shaking. Don't add transpilation steps or pull in dependencies that bloat dist.
- **Consumers testing with Jest** must configure `babel-jest` transforms for both `@cloudinary/url-gen` and `@cloudinary/transformation-builder-sdk` (they ship untranspiled). This is a downstream concern — do not change the dist format.
- **CI uses Travis** (`.travis.yml`), not GitHub Actions. Verified Node targets: 14, 16. Node 18 present but commented out as not yet supported.

## Verified build / test commands

```bash
npm install
npm run lint          # eslint src + __TESTS__ (.ts) — runs lint:src then lint:test
npm run test          # build → tsc type-check → build → jest --coverage → bundle-size check
```

Faster inner loops:

```bash
npm run test:unit             # jest only, no build/coverage/size gates
npm run test:unit:watch       # jest --watch
npm run test:types            # tsc --project tsconfig.test.json
```

CI gate = `npm run lint` then `npm run test`. Run both before opening a PR.
