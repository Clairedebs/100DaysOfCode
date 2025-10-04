import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, PlusIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  readonly PlusIcon = PlusIcon;
}