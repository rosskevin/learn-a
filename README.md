# Lerna monorepo + yarn workspaces + typescript project references + tsc -b

## Features

- lerna monorepo
- yarn workspaces
- typescript project references for incremental build setup according to https://www.typescriptlang.org/docs/handbook/project-references.html
- reused configs

## Building both cjs and esm?

- `yarn build` will build the cjs to `lib/cjs` in each project
- `yarn build:esm` will build the esm to `lib/esm` in each project

## Setting up this repo

```
> git clone https://github.com/rosskevin/learn-a.git
> git checkout build-cjs-esm
> cd learn-a
> yarn install
> lerna bootstrap
> yarn clean:build && yarn build && yarn bundle
```
