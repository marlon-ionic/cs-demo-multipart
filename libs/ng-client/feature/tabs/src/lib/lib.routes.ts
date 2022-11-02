import { Route } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const ngClientFeatureTabsRoutes: Route[] = [
  {
    path: '',
    component: TabsPage,
    children: [
    {

      path: 'cd',
      loadChildren: () =>
        import('@cs-demo-multipart/ng-client/feature/cd-http').then(
          (m) => m.NgClientFeatureCdHttpModule
        ),
    },
    {
      path: 'ng',
      loadChildren: () =>
        import('@cs-demo-multipart/ng-client/feature/ng-http').then(
          (m) => m.NgClientFeatureNgHttpModule
        ),
    }
  ]
}, {
    path: '',
    redirectTo: '/cd',
    pathMatch: 'full'
  }
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];
