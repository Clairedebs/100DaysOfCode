import { Component, EventEmitter, input, Output } from '@angular/core';
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
  @Output() addTask = new EventEmitter<void>();
  task = input.required<Tasks>();
  showEditTask = false;
  editFormData: Partial<Tasks> = {};
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

  openEditTask(){
    // Pré-remplir les champs avec la tâche actuelle
    const t = this.task();
    this.editFormData = {
      id: t.id,
      title: t.title,
      description: t.description,
      duedate: t.duedate,
      status: t.status
    };
    this.showEditTask = true;
  }

  closeEditTask(){
    this.showEditTask = false;
  }

  submitEditTask() {
    if (!this.editFormData.id) return;
    this.taskService.updateTask(this.editFormData.id, this.editFormData).subscribe({
      next: () => {
        this.toastService.showToast('Task updated!', 3000, 'success');
        this.showEditTask = false;
      },
      error: () => {
        this.toastService.showToast('Failed to update task.', 3000, 'error');
      }
    });
  }

}
