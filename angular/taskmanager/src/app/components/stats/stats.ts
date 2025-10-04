import { Component, OnDestroy } from '@angular/core';
import { TasksService } from '../../service/tasks';
import { Tasks } from '../../models/Tasks';
import { LucideAngularModule, CircleCheckBigIcon, ClockIcon, CircleIcon, FolderOpenDotIcon  } from 'lucide-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats',
  imports: [LucideAngularModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class Stats implements OnDestroy {
  readonly CircleCheckBigIcon = CircleCheckBigIcon;
  readonly FolderOpenDotIcon = FolderOpenDotIcon;
  readonly ClockIcon = ClockIcon;
  readonly CircleIcon = CircleIcon;
  tasks: Tasks[] = [];
  completedTasks: Tasks[] = [];
  pendingtasks: Tasks[] = [];
  todoTasks: Tasks[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private taskService:TasksService ) {
    // S'abonner au BehaviorSubject pour recevoir les mises à jour en temps réel
    this.subscription = this.taskService.getTasks().subscribe((tasks: Tasks[])=>{
      this.tasks = tasks;
      this.completedTasks = tasks.filter(task => task.status === "DONE");
      this.pendingtasks = tasks.filter(task => task.status === "ONGOING");
      this.todoTasks = tasks.filter(task => task.status === "TODO");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
