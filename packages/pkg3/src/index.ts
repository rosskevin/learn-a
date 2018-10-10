import * as p1 from '@ryancavanaugh/pkg1';
import { fn } from '@ryancavanaugh/pkg1/foo'; // works with path alias setup
import * as p2 from '@ryancavanaugh/pkg2';

p1.fn();
p2.fn4();
fn();
