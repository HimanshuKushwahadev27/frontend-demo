import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList} from '../roomInterface';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-room-list',
  imports: [DatePipe, CommonModule],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RoomListComponent  implements OnChanges{
  
  constructor(){}



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() rooms: RoomList[] = [] ; 

  @Output() selectedRooms = new EventEmitter<RoomList>();

  selectRooms(room : RoomList){
    this.selectedRooms.emit(room);
  }
}
