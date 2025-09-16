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
    <div *ngIf="toast" class=" mx-auto w-96 z-50 justify-between rounded-2xl mt-2.5 p-4 fixed">
        <div class="backdrop-blur-sm alert shadow-lg rounded-xl px-2 justify-between flex py-2 items-center"
        [ngClass]="{
               'bg-green-50': toast.type === 'success',
               'bg-red-200': toast.type === 'error', 
               'bg-blue-300': toast.type === 'info'
             }"
        >
            <span 
            [ngClass]="{
                    'text-green-700': toast.type === 'success',
                    'text-red-800': toast.type === 'error', 
                    'text-blue-800': toast.type === 'info'
                  }"
            >{{ toast.message }}</span>
            <button class="btn btn-sm btn-circle btn-ghost p-2 rounded-2xl" (click)="toast = null">✕</button>
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