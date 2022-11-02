import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ngClientFeatureNgHttpRoutes } from './lib.routes';
import { NGPage } from './ng/ng.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ngClientFeatureNgHttpRoutes)],
  declarations: [NGPage],
})
export class NgClientFeatureNgHttpModule {}
