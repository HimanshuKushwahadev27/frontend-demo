export interface Room{
  totalRooms: number;
 availabeRooms: number;
 bookedRooms:number;
}

export interface RoomList{
  roomType : string;
  amenities : string;
  price : number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
}