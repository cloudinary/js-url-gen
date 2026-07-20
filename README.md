# Cloudinary URL-Gen SDK

[![npm version](https://img.shields.io/npm/v/@cloudinary/url-gen.svg)](https://www.npmjs.com/package/@cloudinary/url-gen)
[![license](https://img.shields.io/npm/l/@cloudinary/url-gen.svg)](https://www.npmjs.com/package/@cloudinary/url-gen)

The `@cloudinary/url-gen` package is the browser-safe Cloudinary SDK for JavaScript and TypeScript that builds image and video delivery URLs. It turns a public ID like `sample` into an optimized, transformed URL string and holds no API secret, so it runs in any frontend. The package is browser-targeted and ships untranspiled ES modules; it has no Node engine floor, and its CI builds against Node 14 and 16.

## Installation

```bash
npm install @cloudinary/url-gen
```

## Configuration

This SDK never holds an API secret. It only composes public delivery URLs, so the only value it needs is your public cloud name. Create one `Cloudinary` instance and reuse it:

```javascript
import {Cloudinary} from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'my_cloud_name',   // public cloud name, safe in the browser
  },
  url: {
    secure: true,                 // force https (the default)
  },
});
```

There's no `CLOUDINARY_URL`, `api_key`, or `api_secret` to set here. Keep the API secret out of client-side code and version control — anything that needs it (uploads, Admin API, signed URLs) runs on a server with [`cloudinary`](https://github.com/cloudinary/cloudinary_npm).

## Quick examples

### Build a transformed delivery URL

Create an image asset with `cld.image('<PUBLIC_ID>')`, chain a resize action, then call `.toURL()`. `.toURL()` is synchronous and makes no network call. Import each action from its deep path so bundlers can tree-shake it:

```javascript
import {Cloudinary} from '@cloudinary/url-gen';
import {fill} from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({cloud: {cloudName: 'demo'}});

const url = cld.image('sample')
  .resize(fill().width(100).height(150))
  .toURL();
// https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_150/sample
```

### Deliver an auto-optimized image

`format('auto')` (`f_auto`) lets Cloudinary serve AVIF or WebP to browsers that support it, and `quality('auto')` (`q_auto`) picks the smallest quality that still looks right. Both come from the `delivery` action path:

```javascript
import {Cloudinary} from '@cloudinary/url-gen';
import {format, quality} from '@cloudinary/url-gen/actions/delivery';

const cld = new Cloudinary({cloud: {cloudName: 'demo'}});

const url = cld.image('sample')
  .delivery(format('auto'))
  .delivery(quality('auto'))
  .toURL();
// https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/sample
```

### Build an optimized video URL

The same delivery actions work on video. Use `cld.video('<PUBLIC_ID>')` to target the video resource type:

```javascript
import {Cloudinary} from '@cloudinary/url-gen';
import {format, quality} from '@cloudinary/url-gen/actions/delivery';

const cld = new Cloudinary({cloud: {cloudName: 'demo'}});

const url = cld.video('dog')
  .delivery(format('auto'))
  .delivery(quality('auto'))
  .toURL();
// https://res.cloudinary.com/demo/video/upload/f_auto/q_auto/dog
```

## For AI agents

`@cloudinary/url-gen` is the browser-safe, framework-agnostic builder for Cloudinary image and video delivery URLs; it returns strings and has no upload, admin, or secret surface. Import each action from its deep path (`@cloudinary/url-gen/actions/resize`), not from the package root — a bare `import {fill} from '@cloudinary/url-gen'` throws. For tasks this package doesn't cover, use a sibling package:

| Task | Package |
|---|---|
| Upload, Admin API, or signed URLs on a server | [`cloudinary`](https://github.com/cloudinary/cloudinary_npm) |
| Render React, Angular, or Vue components | [`@cloudinary/react` / `@cloudinary/ng` / `@cloudinary/vue`](https://github.com/cloudinary/frontend-frameworks) |
| Drop-in Next.js components | [`next-cloudinary`](https://github.com/cloudinary-community/next-cloudinary) |
| The transformation-action engine this package re-exports | [`@cloudinary/transformation-builder-sdk`](https://github.com/cloudinary/js-transformation-builder-sdk) |
| Run Cloudinary operations as agent tools | [Cloudinary MCP servers](https://github.com/cloudinary/mcp-servers) |

The Angular package is `@cloudinary/ng`. `@cloudinary/angular` on npm is an abandoned Beta — don't use it.

## Links

- [JavaScript SDK guide](https://cloudinary.com/documentation/javascript_integration)
- [URL-Gen SDK reference](https://cloudinary.com/documentation/sdks/js/url-gen/index.html)
- [Image transformations](https://cloudinary.com/documentation/javascript_image_transformations)
- [Video transformations](https://cloudinary.com/documentation/javascript_video_transformations)
- [Transformation and API references](https://cloudinary.com/documentation/cloudinary_references)
- [Documentation llms.txt index](https://cloudinary.com/documentation/llms.txt)
- [Package on npm](https://www.npmjs.com/package/@cloudinary/url-gen)

Released under the MIT license.
