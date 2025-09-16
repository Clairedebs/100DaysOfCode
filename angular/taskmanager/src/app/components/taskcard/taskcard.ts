import { Component, input } from '@angular/core';
import { Tasks } from '../../models/Tasks';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../service/tasks';
import { ToastService } from '../../service/toast';

@Component({
  selector: 'app-taskcard',
  imports: [CommonModule],
  templateUrl: './taskcard.html',
  styleUrl: './taskcard.css'
})
export class Taskcard {
  task = input.required<Tasks>();
  constructor(
    private taskService: TasksService,
    private toastService: ToastService
  ){}

  deleteTask(id: number | undefined){
    if(!id) return;
    this.taskService.deleteTask(id).subscribe({
      next: (response) => {
        this.toastService.showToast("Task deleted !", 3000, 'success');
      },
      error: (error) => {
        this.toastService.showToast("Failed to delete task.", 3000, 'error');
      }
    });
    
  }

}
