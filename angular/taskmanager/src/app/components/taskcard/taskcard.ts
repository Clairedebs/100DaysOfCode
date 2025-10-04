import { Component, EventEmitter, input, Output } from '@angular/core';
import { Tasks } from '../../models/Tasks';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../service/tasks';
import { ToastService } from '../../service/toast';
import { LucideAngularModule, SquarePenIcon, TrashIcon, CircleCheckBigIcon, CircleIcon, FolderOpenDotIcon, ClockIcon} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-taskcard',
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './taskcard.html',
  styleUrl: './taskcard.css'
})
export class Taskcard {
  readonly CircleCheckBigIcon = CircleCheckBigIcon;
  readonly FolderOpenDotIcon = FolderOpenDotIcon;
  readonly ClockIcon = ClockIcon;
  readonly CircleIcon = CircleIcon;
  readonly SquarePenIcon = SquarePenIcon;
  readonly TrashIcon = TrashIcon
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
