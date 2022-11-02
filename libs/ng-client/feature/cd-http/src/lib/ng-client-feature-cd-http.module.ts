import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ngClientFeatureCdHttpRoutes } from './lib.routes';
import { CordovaPage } from './cordova/cordova.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(ngClientFeatureCdHttpRoutes)],
  declarations: [CordovaPage],
})
export class NgClientFeatureCdHttpModule {}
