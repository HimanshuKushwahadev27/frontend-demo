import { UUID } from "crypto";

export interface Room{
  totalRooms: number;
 availabeRooms: number;
 bookedRooms:number;
}

export interface RoomList{
  id: UUID;
  roomType : string;
  amenities : string;
  price : number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
}