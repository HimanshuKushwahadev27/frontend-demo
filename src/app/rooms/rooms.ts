import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './roomInterface';
import {RoomListComponent} from './room-list/room-list';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomListComponent ],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit{


  hideRooms = false;
  hotelName = 'Shanton Hotel';
  hotelRooms = 10;
  
  rooms : Room = {
    totalRooms: 20,
    availabeRooms:10,
    bookedRooms: 5
  }

 roomList : RoomList [] =[] ;

 
  constructor(){}


  ngOnInit(): void {
    this.roomList = [
    {
    roomType: 'Deluxe Room',
    amenities: 'AC, WiFi, TV, Mini Bar',
    price: 2500,
    photos: 'https://picsum.photos/200/300?random=1',
    checkInTime: new Date('2026-02-12T12:00:00'),
    checkOutTime: new Date('2026-02-13T11:00:00')
  },
  {
    roomType: 'Executive Suite',
    amenities: 'AC, WiFi, TV, Mini Bar, Bathtub',
    price: 4500,
    photos: 'https://picsum.photos/200/300?random=2',
    checkInTime: new Date('2026-02-12T12:00:00'),
    checkOutTime: new Date('2026-02-13T11:00:00')
  },
  {
    roomType: 'Presidential Suite',
    amenities: 'AC, WiFi, TV, Jacuzzi, Private Pool',
    price: 10000,
    photos: 'https://picsum.photos/200/300?random=3',
    checkInTime: new Date('2026-02-12T12:00:00'),
    checkOutTime: new Date('2026-02-13T11:00:00')
  }
    ]
    }

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomList){
    console.log(room);
  }

}
