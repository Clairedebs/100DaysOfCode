import { Component, EventEmitter, Output } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, } from '@angular/forms';
import { TasksService } from '../../service/tasks';
import { Tasks } from '../../models/Tasks';
import { ToastService } from '../../service/toast';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css'
})
export class Addtask {

  @Output() close = new EventEmitter<void>();
  
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl('TODO')
  });

  constructor(
    private taskService:TasksService,
    private toastService: ToastService
   ) {}

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        title: this.taskForm.value.title ?? '',
        description: this.taskForm.value.description ?? '',
        duedate: new Date(this.taskForm.value.dueDate ?? ''),
      };
      this.taskService.createTask(newTask).subscribe(() => {
        this.taskForm.reset();
        this.close.emit();
        this.toastService.showToast("Task added !", 3000, 'success');
      });
    }
  }

}
