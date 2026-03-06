import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { Room, RoomShow } from './roomInterface';
import { Header } from "../header/header";
import { RoomsService } from './services/rooms';
import { HttpEventType } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { catchError, of, Subject } from 'rxjs';
import { RoomShowComponent } from './room-show/room-show';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomShowComponent, Header, AsyncPipe, RouterOutlet],
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


 roomShow : RoomShow []  =[] ;

 @ViewChild(Header, {static: true}) header !: Header;

 //DI
  roomService = inject(RoomsService);
  error$ = new Subject<string>;
  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(catchError((err) => {
    this.error$.next(err.message);
    return of([]);
  }));

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
      //  this.roomService.getRooms$.subscribe(rooms => {
      //   this.roomList = rooms;
      // });
    }

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomShow){
    console.log(room);
  }


  
}
