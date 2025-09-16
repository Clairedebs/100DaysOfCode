export class Toast{
  constructor(
    public message: string,
    public duration: number = 3000,
    public type: 'success' | 'error' | 'info' = 'info'
  ) {}
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  toast$ = this.toastSubject.asObservable();

  showToast(message: string, duration: number = 3000, type: 'success' | 'error' | 'info' = 'info') {
    const toast = new Toast(message, duration, type);
    this.toastSubject.next(toast);
    setTimeout(() => this.toastSubject.next(null), duration);
  }
}
