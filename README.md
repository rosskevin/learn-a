# Lerna + Project References + direct file import (e.g. not an index export)

Lerna, yarn workspaces, and a direct file import (not just index) with a flattened build output.

**It works!**

## Flattened build?

Our packages (and many others like `@material-ui/core`) are flattened when published to prevent unnecessarily deep import paths.

The rough equivalent of:

```bash
cd packages/pkg1
yarn tsc
cd lib
cp package.json .
# modify module/typings properties to be ./index
npm publish
```

This makes the `index` and `foo` siblings at the root of the package, resolvable at the same level (no `lib` folder). It is also the reason for the two entries in the path aliases above. The path aliases above allow a source monorepo to behave like a published package, which I feel strongly is an essential need for project-references to be usable.

## Error without path alias

```
packages/pkg2/src/index.ts:2:20 - error TS2307: Cannot find module '@ryancavanaugh/pkg1/foo'.

2 import { fn } from '@ryancavanaugh/pkg1/foo';
```

# Setting up this repo

```
> git clone https://github.com/rosskevin/learn-a.git
> git checkout yarn-workspaces-TS2307
> cd learn-a
> yarn install
> lerna bootstrap
> yarn clean:build && yarn build
```
