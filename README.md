# Lerna + Project References + direct file import (e.g. not an index export)

Lerna, yarn workspaces, and a direct file import (not index) yields:

```
packages/pkg2/src/index.ts:2:20 - error TS2307: Cannot find module '@ryancavanaugh/pkg1/foo'.

2 import { fn } from '@ryancavanaugh/pkg1/foo';
```

## Difference

```
// import * as p1 from '@ryancavanaugh/pkg1'; // works
import { fn } from '@ryancavanaugh/pkg1/foo'; // does not work

export function fn4() {
  // p1.fn();
  fn();
}
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
