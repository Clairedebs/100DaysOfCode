import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../service/tasks';
import { Tasks } from '../../models/Tasks';
import { TaskStatus } from '../../models/StatusEnums';
import { TaskPriority } from '../../models/PriorityEnums';
import { ToastService } from '../../service/toast';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css'
})
export class Addtask {

  addtask = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('',Validators.required),
    dueDate: new FormControl<Date | null>(null, Validators.required),
    status: new FormControl<TaskStatus>(TaskStatus.TODO, Validators.required),
    priority: new FormControl<TaskPriority>(TaskPriority.LOW, Validators.required)
  })
  taskService = inject(TasksService)
  toastService = inject(ToastService)
  submit(){
    let task:Tasks = {
      title: this.addtask.value.title ?? '',
      description: this.addtask.value.description ?? '',
      dueDate: this.addtask.value.dueDate ?? new Date(),
      status: this.addtask.value.status ?? "TODO",
      priority: this.addtask.value.priority ?? "LOW"
    }
    this.taskService.createTask(task).subscribe({
      next: (response) => {
        this.toastService.showToast("Task created !", 3000, 'success');
        console.log("Task created successfully", response);
        this.addtask.reset();
      },
      error: (error) => {
        this.toastService.showToast("Failed to create task.", 3000, 'error');
        console.error("Error creating task", error);
      }
    });
  }

}
