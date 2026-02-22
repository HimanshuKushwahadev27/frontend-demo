import { Component, Input, Output } from '@angular/core';
import { RoomList} from '../roomInterface';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-room-list',
  imports: [DatePipe],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss',
})
export class RoomListComponent {

  @Input() rooms: RoomList[] = [] ; 

  @Output() selectedRooms = new EventEmitter<RoomList>();

  selectRooms(room : RoomList){
    this.selectedRooms.emit(room);
  }
}
