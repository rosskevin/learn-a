# Lerna monorepo + yarn workspaces + typescript project references + tsc -b

## Features

- lerna monorepo
- yarn workspaces
- typescript project references for incremental build setup according to https://www.typescriptlang.org/docs/handbook/project-references.html
- rollup for cjs and esm bundles
- reused configs

## Rollup for esm and cjs

`yarn bundle`

## Setting up this repo

```
> git clone https://github.com/rosskevin/learn-a.git
> git checkout build-rollup
> cd learn-a
> yarn install
> lerna bootstrap
> yarn clean:build && yarn build && yarn bundle
```
