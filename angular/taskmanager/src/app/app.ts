import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Addtask } from "./components/addtask/addtask";
import { Stats } from './components/stats/stats';
import { Taskcard } from './components/taskcard/taskcard';
import { TasksService } from './service/tasks';
import { Tasks } from './models/Tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Addtask, Stats, Taskcard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: Tasks[] = [];
  protected readonly title = signal('taskmanager');
  constructor(private taskService: TasksService){
    this.taskService.getTasks().subscribe((tasks: Tasks[])=>{
      this.tasks = tasks;
    });
  }
}
