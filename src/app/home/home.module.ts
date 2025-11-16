import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Router, RouterModule } from '@angular/router';

const routes = [
  { path: '',
    component: HomePage, }];
@NgModule({
  imports: [
    HomePageRoutingModule,
    RouterModule.forChild(routes),
    HomePage
  ],
})
export class HomePageModule {}
