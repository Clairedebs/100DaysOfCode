import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Addtask } from "./components/addtask/addtask";
import { Stats } from './components/stats/stats';
import { Taskcard } from './components/taskcard/taskcard';
import { TasksService } from './service/tasks';
import { Tasks } from './models/Tasks';
import { ToastComponent } from './components/toast/toast.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Addtask, Stats, Taskcard, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public tasks$! : Observable<Tasks[]>;
  showAddTask = false;
  protected readonly title = signal('taskmanager');
  constructor(private taskService: TasksService){
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks(); 
  }

  openAddTask() {
    this.showAddTask = true;
  }

  closeAddTask() {
    this.showAddTask = false;
  }
}
