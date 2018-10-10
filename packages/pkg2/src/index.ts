// import * as p1 from '@ryancavanaugh/pkg1'; // works
import { fn } from '@ryancavanaugh/pkg1/foo'; // works with path alias setup

export function fn4() {
  fn();
}
