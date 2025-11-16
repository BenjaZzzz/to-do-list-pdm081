import { TodoService } from './../todo';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonContent, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Para los <ion-*> (Todos los componentes de Ionic)
    CommonModule, // Para *ngFor, *ngIf
    DatePipe, // Para el pipe date (Las fechas)
    AddNewTaskPage, // Para usarlo en el modal
  ],
})
export class HomePage {
  todoList: any[] = [];

  //   todoList = [{
  //     todoName: 'Buy groceries',
  //     todoDate: '2024-06-10',
  //     priority: 'High',
  //     category: 'Personal'
  //   },
  //   {
  //     todoName: 'Finish project report',
  //     todoDate: '2024-06-12',
  //     priority: 'Medium',
  //     category: 'Work'
  //   },
  //   {
  //     todoName: 'Schedule dentist appointment',
  //     todoDate: '2024-06-15',
  //     priority: 'Low',
  //     category: 'Health'
  //   },
  // {
  //     todoName: 'Plan weekend trip',
  //     todoDate: '2024-06-11',
  //     priority: 'intermediate',
  //     category: 'Leisure'
  // }];

  todayDate: number = Date.now();

  getColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  }

  constructor(public modalCtrl: ModalController, private TodoService: TodoService) {}

  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    this.todoList = await this.TodoService.getAllTasks();
    console.log('Loaded Tasks:', this.todoList);
  }

  async dismis() {
    await this.modalCtrl.dismiss(this.addTasks());
  }

  async addTasks() {
    const { AddNewTaskPage } = await import(
      '../add-new-task/add-new-task.page'
    );

    console.log('Adding new task...');
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then(async (res) => {
      // if (newTaskObject.data) {
      //   console.log('New Task Data:', newTaskObject.data);
      //   this.todoList.push(newTaskObject.data);
      // } else {
      //   console.log('Modal dismissed without adding a task.');
      // }
      if (res.data) {
        console.log('New Task Data:', res.data);
        const key = `task_${new Date().getTime()}`;
        await this.TodoService.addTask(key, res.data);
        this.loadTasks();
      } else {
        console.log('Modal dismissed without adding a task.');
      }
    });

    return modal.present();
  }

  markComplete(item: any) {
    // console.log(`Task Completed: ${item.todoName}`);
    // this.deleteTask(item);
    this.TodoService.deleteTask(item.key);
    this.loadTasks();
  }

  deleteTask(item: any) {
    // const index = this.todoList.indexOf(item);
    // if (index > -1) {
    //   console.log(
    //     `Task Deleted: ${item.todoName}, Date: ${item.todoDate}, Priority: ${item.priority}, Category: ${item.category}`
    //   );
    //   this.todoList.splice(index, 1);
    // } else console.log('Task not found in the list.');
    this.TodoService.deleteTask(item.key);
    this.loadTasks();
  }
}
