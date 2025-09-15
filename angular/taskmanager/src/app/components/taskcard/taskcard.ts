import { Component, input } from '@angular/core';
import { Tasks } from '../../models/Tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskcard',
  imports: [CommonModule],
  templateUrl: './taskcard.html',
  styleUrl: './taskcard.css'
})
export class Taskcard {
  task = input.required<Tasks>();
}
