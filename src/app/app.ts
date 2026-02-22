import { Component, signal } from '@angular/core';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'app-root',
  imports: [Rooms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
