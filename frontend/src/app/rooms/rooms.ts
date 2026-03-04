import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './roomInterface';
import {RoomListComponent} from './room-list/room-list';
import { Header } from "../header/header";
import { RoomsService } from './services/rooms';
import { randomUUID } from 'crypto';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomListComponent, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit, AfterViewInit{


  hideRooms = false;
  hotelName = 'Shanton Hotel';
  hotelRooms = 10;
  totalBytes = 0;
  rooms : Room = {
    totalRooms: 20,
    availabeRooms:10,
    bookedRooms: 5
  }

 roomList : RoomList [] =[] ;

 @ViewChild(Header, {static: true}) header !: Header;

 //DI
  constructor(private roomService : RoomsService){
  }

  ngAfterViewInit(): void {
    console.log(this.header);
  }


  ngOnInit(): void {
      this.roomService.getPhotos().subscribe((event) => {
        switch(event.type){
          case HttpEventType.Sent: {
            console.log('request has been made');
            break;
          }
          case HttpEventType.ResponseHeader:{
            console.log('Request success');
            break;
          }
          case HttpEventType.DownloadProgress: {
            this.totalBytes+=event.loaded;
            break;
          }
          case HttpEventType.Response: {
            console.log(event.body);
          }
        }
      });
       this.roomService.getRooms().subscribe(rooms => {
        this.roomList = rooms;
      });
    }

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomList){
    console.log(room);
  }


  
}
