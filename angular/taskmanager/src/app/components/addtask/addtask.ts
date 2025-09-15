import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, } from '@angular/forms';
import { TasksService } from '../../service/tasks';
import { Tasks } from '../../models/Tasks';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css'
})
export class Addtask {

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    duedate: new FormControl(''),
    status: new FormControl('TODO')
  });

  constructor(private taskService:TasksService ) {}

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        title: this.taskForm.value.title || '',
        description: this.taskForm.value.description || '',
        duedate: new Date(this.taskForm.value.duedate || '')
      };
      this.taskService.createTask(newTask).subscribe(() => {
        this.taskForm.reset();
      });
    }
  }

}
