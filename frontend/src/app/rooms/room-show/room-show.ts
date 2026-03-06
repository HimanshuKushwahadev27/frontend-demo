import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RoomShow } from '../roomInterface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-show',
  imports: [CommonModule, RouterLink],
  templateUrl: './room-show.html',
  styleUrl: './room-show.scss',
})
export class RoomShowComponent {

  @Input() rooms: RoomShow[] = [] ; 

  @Output() selectedRooms = new EventEmitter<RoomShow>();
}
