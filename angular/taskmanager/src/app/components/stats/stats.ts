import { Component } from '@angular/core';
import { TasksService } from '../../service/tasks';
import { Tasks } from '../../models/Tasks';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class Stats {

  tasks: Tasks[] = [];
  completedTasks: Tasks[] = [];
  pendingtasks: Tasks[] = [];
  todoTasks: Tasks[] = [];

  constructor(private taskService:TasksService ) {
    this.taskService.getTasks().subscribe((tasks: Tasks[])=>{
      this.tasks = tasks;
      this.completedTasks = tasks.filter(task => task.status === "DONE");
      this.pendingtasks = tasks.filter(task => task.status === "ONGOING");
      this.todoTasks = tasks.filter(task => task.status === "TODO");
    });
  }

}
