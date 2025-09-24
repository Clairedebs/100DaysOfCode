import { Component, EventEmitter, input, Output } from '@angular/core';
import { Tasks } from '../../models/Tasks';
import { ToastService } from '../../service/toast';
import { TasksService } from '../../service/tasks';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittasks',
  imports: [],
  templateUrl: './edittasks.html',
  styleUrl: './edittasks.css'
})
export class Edittasks {
  task = input<Tasks>;
  @Output() close = new EventEmitter<void>();
  
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('',[Validators.required, Validators.minLength(5)]),
    dueDate: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });


  constructor(
    private taskService: TasksService,
    private toastService: ToastService
  ){}

  editTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        title: this.taskForm.value.title ?? '',
        description: this.taskForm.value.description ?? '',
        duedate: new Date(this.taskForm.value.dueDate ?? ''),
        status: this.taskForm.value.status as "TODO" | "ONGOING" | "DONE" | "CANCELLED" | undefined
      };
      // this.taskService.updateTask(this, newTask).subscribe(() => {
      //   this.taskForm.reset();
      //   this.toastService.showToast("Task updated !", 3000, 'success');
      //   this.close.emit();
      // });
      console.log(newTask);
    }
  }

}
