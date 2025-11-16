import { TodoService } from './../todo';
import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonHeader, IonContent, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
  imports: [
    IonicModule,
    FormsModule,
    NgForOf
],
})
export class AddNewTaskPage implements OnInit {

  categories = ['Work', 'Personal', 'Health', 'Leisure', 'Others'];

  newTask = {};
  todoName: string = '';
  todoDate: string = '';
  priority: string = '';
  category: string = '';

  taskObject: any;

  constructor(public modalCtrl: ModalController, public TodoService: TodoService) { }

  ngOnInit() {
  }

  async dismis() {
    this.modalCtrl.dismiss(this.taskObject);
  }

  categorySelected(index: number) {
    this.category = this.categories[index];
  }


  addTask() {
    this.taskObject = ({
      todoName: this.todoName,
      todoDate: this.todoDate,
      priority: this.priority,
      category: this.category
    });

    console.log(`Task Added: ${this.todoName}, Date: ${this.todoDate}, Priority: ${this.priority}, Category: ${this.category}`);

    this.dismis();
  }

  saveTask() {
    // Lógica para guardar la nueva tarea
    this.addTask();

    this.modalCtrl.dismiss(this.taskObject);
  }

}
