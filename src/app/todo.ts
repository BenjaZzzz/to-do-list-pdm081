import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init();
  }

  async addTask(key: any, value: any) {
    return this.storage.set(key, value);
  }

  async getTask(key: any) {
    return this.storage.get(key);
  }

  async deleteTask(key: any) {
    return this.storage.remove(key);
  }

  async updateTask(key: any, newValue: any) {
    await this.storage.set(key, newValue);
    return this.getAllTasks();
  }


  async getAllTasks() {
  let tasks: any[] = [];
  await this.storage.forEach((value, key, index) => {
    tasks.push({
      key, ...value });
  });
  return tasks;
  }

  async init() {
    await this.storage.create();
  }

}
