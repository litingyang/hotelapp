import { Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  roomList: RoomList[]= [
    {
      price:1000,
      roomType:"type1",
      amenities:"TV",
      photos:"http://images",
      checkinTime: new Date("01-Jan-2023"),
      checkoutTime: new Date("03-Jan-2023"),
      rating:3.71
    },{
      price:5000,
      roomType:"type2",
      amenities:"AC",
      photos:"http://images",
      checkinTime: new Date("05-Jan-2023"),
      checkoutTime: new Date("09-Jan-2023"),
      rating:4.0
    }
  ]
  constructor() { }
  getRooms(){
    return this.roomList
  }
}
