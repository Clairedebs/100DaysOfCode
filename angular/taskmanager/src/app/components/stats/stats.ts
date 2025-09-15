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

  constructor(private taskService:TasksService ) {
    this.taskService.getTasks().subscribe((tasks: Tasks[])=>{
      this.tasks = tasks;
    });
  }

}
