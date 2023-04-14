import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'lt-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  
  hotelName = "223 hotel";
  numberOfRooms = 1;
  hideRooms = false;
  rooms:Room = {
    totalRooms: 20,
    availableRooms:17,
    bookedRooms:3
  }

  // roomList:RoomList[] = [
  //   {
  //     price:1000,
  //     roomType:"type1",
  //     amenities:"TV",
  //     photos:"http://images",
  //     checkinTime: new Date("01-Jan-2023"),
  //     checkoutTime: new Date("03-Jan-2023"),
  //     rating:3.71
  //   },{
  //     price:5000,
  //     roomType:"type2",
  //     amenities:"AC",
  //     photos:"http://images",
  //     checkinTime: new Date("05-Jan-2023"),
  //     checkoutTime: new Date("09-Jan-2023"),
  //     rating:4.0
  //   }
  // ]
  @ViewChild(HeaderComponent, {static:true}) headercomopnent!: HeaderComponent;
  constructor() {

  }

  ngAfterViewChecked(): void {
    this.headercomopnent.title = "Rooms View";
  }
  ngAfterViewInit(): void {
    console.log(this.headercomopnent);
  }
  ngDoCheck(): void {
    console.log("on changes called");
  }
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
  }
  roomList:RoomList[] = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
    this.roomList = [
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
    
  }
  selectedRoom!:|RoomList;
  selectRoom(room:RoomList){
    this.selectedRoom = room;
    this.rooms.availableRooms = 0;
  }
  addRoom(){
    const room:RoomList = {
      price:2000,
      roomType:"type2",
      amenities:"TV",
      photos:"http://images",
      checkinTime: new Date("30-Jan-2023"),
      checkoutTime: new Date("331-Jan-2023"),
      rating:3.3
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room];
  }
  title:string = "Room List"
}
