import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ngClientFeatureTabsRoutes } from './lib.routes';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(ngClientFeatureTabsRoutes)],
  declarations: [TabsPage],
})
export class NgClientFeatureTabsModule {}
