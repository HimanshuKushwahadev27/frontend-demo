import { inject, Injectable } from '@angular/core';
import { RoomList, RoomShow } from '../roomInterface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {

    // private headers = new HttpHeaders({'token': '1u310941041-49-12'});
    private http = inject(HttpClient);
    getRooms$ = this.http.get<RoomShow[]>('/api/rooms/get').pipe(shareReplay(1));

  getRooms(){
    return this.http.get<RoomShow[]>('/api/rooms/get');
  }

  addRoom(room : RoomList){
    return this.http.post('/api/rooms/create', room);
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/albums/1/photos`, {reportProgress: true});
    return this.http.request(request);
  }
}
