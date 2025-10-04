import { Routes } from '@angular/router';
import { Addtask } from './components/addtask/addtask';
import { Edittasks } from './components/edittasks/edittasks';

export const routes: Routes = [
   {
    path: 'new',
    component: Addtask,
    title: 'Add New Task',
   },
   {
    path: 'edit/:id',
    component: Edittasks,
    title: 'Edit Task',
   }
];
