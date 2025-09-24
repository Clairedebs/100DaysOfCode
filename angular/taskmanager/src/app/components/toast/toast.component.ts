import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Toast, ToastService } from '../../service/toast';
@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-toast',
  template: `
    <div *ngIf="toast" class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md flex justify-center items-center animate-fade-in">
      <div class="backdrop-blur-md shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-4 border-2"
        [ngClass]="{
          'bg-green-50 border-green-200': toast.type === 'success',
          'bg-red-50 border-red-200': toast.type === 'error',
          'bg-purple-50 border-purple-200': toast.type === 'info'
        }">
        <span class="text-lg font-medium"
          [ngClass]="{
            'text-green-700': toast.type === 'success',
            'text-red-700': toast.type === 'error',
            'text-purple-700': toast.type === 'info'
          }"
        >{{ toast.message }}</span>
        <button
          [ngClass]="{
            'bg-green-600 hover:bg-green-700': toast.type === 'success',
            'bg-red-600 hover:bg-red-700': toast.type === 'error',
            'bg-purple-600 hover:bg-purple-700': toast.type === 'info'
          }"
          class="text-white p-2 rounded-full transition-colors duration-200 ml-2"
          (click)="toast = null"
          aria-label="Close toast"
        >✕</button>
      </div>
    </div>
  `
})

export class ToastComponent implements OnInit {

  toast: Toast | null = null;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(toast => {
      this.toast = toast;
    });
  }
}