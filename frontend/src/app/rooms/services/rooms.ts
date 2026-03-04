import { Injectable } from '@angular/core';
import { RoomList } from '../roomInterface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  
  constructor(private http : HttpClient){}
  roomList : RoomList [] =[] ;

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms/get');
  }

  addRoom(room : RoomList){
    return this.http.post('/api/rooms/create', room);
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/albums/1/photos`, {reportProgress: true});
    return this.http.request(request);
  }
}
