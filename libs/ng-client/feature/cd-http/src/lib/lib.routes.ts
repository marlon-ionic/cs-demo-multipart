import { Route } from '@angular/router';
import { CordovaPage } from './cordova/cordova.page';

export const ngClientFeatureCdHttpRoutes: Route[] = [
  {
    path: '',
    component: CordovaPage
  }
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];
