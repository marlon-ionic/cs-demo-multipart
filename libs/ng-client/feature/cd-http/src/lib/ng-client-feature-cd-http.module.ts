import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ngClientFeatureCdHttpRoutes } from './lib.routes';
import { CordovaPage } from './cordova/cordova.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@NgModule({
  declarations: [CordovaPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ngClientFeatureCdHttpRoutes)],
  providers: [HTTP]
})
export class NgClientFeatureCdHttpModule {}
