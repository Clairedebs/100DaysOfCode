import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TasksService } from '../../service/tasks';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TaskPriority } from '../../models/PriorityEnums';
import { TaskStatus } from '../../models/StatusEnums';
import { ToastService } from '../../service/toast';
import { Tasks } from '../../models/Tasks';

@Component({
  selector: 'app-edittasks',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edittasks.html',
  styleUrl: './edittasks.css'
})
export class Edittasks {
  edittask = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('',Validators.required),
    dueDate: new FormControl<Date | null>(null, Validators.required),
    status: new FormControl<TaskStatus>(TaskStatus.TODO, Validators.required),
    priority: new FormControl<TaskPriority>(TaskPriority.LOW, Validators.required)
  })
  taskService = inject(TasksService)
  toastService = inject(ToastService)
  task : Tasks | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);
  taskId: number = +this.route.snapshot.params['id'];

  constructor(){
    this.taskService.getTaskById(this.taskId).subscribe({
      next: (response) => {
        this.task = response;
        // Convertir la date en format ISO pour l'input date
        const dateValue = this.task.dueDate ? new Date(this.task.dueDate) : null;
        
        this.edittask.patchValue({
          title: this.task.title,
          description: this.task.description,
          dueDate: dateValue,
          status: this.task.status as TaskStatus || TaskStatus.TODO,
          priority: this.task.priority as TaskPriority || TaskPriority.LOW
        });
      }
    });
  }

  editTasks(){
    if(!this.task) return;
    let updatedTask:Tasks = {
      id: this.task.id,
      title: this.edittask.value.title ?? this.task.title,
      description: this.edittask.value.description ?? this.task.description,
      dueDate: this.edittask.value.dueDate ?? new Date(),
      status: this.edittask.value.status ?? this.task.status ?? "TODO",
      priority: this.edittask.value.priority ?? this.task.priority ?? "LOW"
    };
    this.taskService.updateTask(this.taskId, updatedTask).subscribe({
      next: (response) => {
        this.toastService.showToast("Task updated successfully", 3000, 'success');
      },
      error: (error) => {
        this.toastService.showToast("Failed to update task", 3000, 'error');
      }
    });
  }
}
