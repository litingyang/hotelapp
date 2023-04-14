import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'lt-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy{

  @Input() rooms: RoomList[] = [];
  @Input() title: string = "";
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor(){}
  ngOnDestroy(): void {
    console.log("ondestroy");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
    console.log(changes);
  }
  ngOnInit(): void {
    
  }
  selectRoom(room:RoomList){
    this.roomSelected.emit(room);
  }

}
