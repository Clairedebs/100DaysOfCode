import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tasks } from '../models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiurl = "http://localhost:8080/api/tasks";
  private tasksSubject = new BehaviorSubject<Tasks[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    // Charger les tâches au démarrage du service
    this.loadTasks();
  }

  // Méthode pour charger toutes les tâches
  private loadTasks(): void {
    this.http.get<Tasks[]>(this.apiurl).subscribe({
      next: (tasks) => this.tasksSubject.next(tasks),
      error: (error) => console.error('Erreur lors du chargement des tâches:', error)
    });
  }

  // Getter pour accéder aux tâches actuelles
  get currentTasks(): Tasks[] {
    return this.tasksSubject.value;
  }

  // Méthode publique pour rafraîchir les tâches
  refreshTasks(): void {
    this.loadTasks();
  }

  getTasks(): Observable<Tasks[]> {
    return this.tasks$;
  }

  getTaskById(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.apiurl}/${id}`,{ responseType:'text' as 'json' });
  }

  createTask(task: Tasks): Observable<any> {
    return this.http.post<Tasks>(this.apiurl, task, { responseType:'text' as 'json' }).pipe(
      tap(() => {
        // Recharger toutes les tâches après création
        this.loadTasks();
      })
    );
  }

  updateTask(id: number, task: any): Observable<Tasks> {
    return this.http.patch<Tasks>(`${this.apiurl}/${id}`, task).pipe(
      tap(() => {
        // Recharger toutes les tâches après mise à jour
        this.loadTasks();
      })
    );
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiurl}/${id}`, { responseType:'text' as 'json' }).pipe(
      tap(() => {
        // Supprimer la tâche du BehaviorSubject
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = currentTasks.filter(task => task.id !== id);
        this.tasksSubject.next(updatedTasks);
      })
    );
  }

}
