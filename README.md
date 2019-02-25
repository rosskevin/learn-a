# Lerna monorepo + yarn workspaces + typescript project references + tsc -b cjs and esm

Lerna, yarn workspaces, with both cjs and esm builds

# Setting up this repo

```
> git clone https://github.com/rosskevin/learn-a.git
> git checkout yarn-workspaces-project-ref-build
> cd learn-a
> yarn install
> lerna bootstrap
> yarn clean:build && yarn build
```
