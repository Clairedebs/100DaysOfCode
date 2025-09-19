import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiurl = "http://localhost:8080/api/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiurl);
  }

  // getProductsById(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.API_URL}/products/${id}`);
  // }

  getTaskById(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.apiurl}/${id}`);
  }

  createTask(task: Tasks): Observable<any> {
    return this.http.post<Tasks>(this.apiurl, task);
  }

  updateTask(id: number, task: any): Observable<Tasks> {
    return this.http.patch<Tasks>(`${this.apiurl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiurl}/${id}`);
  }

}
