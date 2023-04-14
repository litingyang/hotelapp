export interface Room{
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList{
    price:number;
    roomType:string;
    amenities:string;
    photos:string;
    checkinTime:Date;
    checkoutTime:Date;
    rating: number;
}