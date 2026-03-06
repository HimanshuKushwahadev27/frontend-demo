import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Rooms } from './rooms/rooms';
import { Notfound } from './notfound/notfound';
import { RoomBooking } from './rooms/room-booking/room-booking';
import { RoomsCreate } from './rooms/rooms-create/rooms-create';


export const routes: Routes = [
    {path: 'rooms/create', component: RoomsCreate},
  {path : 'employee', component: Employee},
  {path: 'rooms', component: Rooms, children: [
       {path: ':id', component: RoomBooking}
  ]},
  {path : '', redirectTo: '/rooms', pathMatch: 'full'},
  { path: '**', component: Notfound }
];

