import type { CanMatchFn } from '@angular/router';

export const authenticatedGuard: CanMatchFn = (route, segments) => {
  return true;
};
