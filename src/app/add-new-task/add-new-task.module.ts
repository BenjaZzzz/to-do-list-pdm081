import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTaskPageRoutingModule } from './add-new-task-routing.module';

import { AddNewTaskPage } from './add-new-task.page';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: AddNewTaskPage }]),
    AddNewTaskPage
  ],
})
export class AddNewTaskPageModule {}
