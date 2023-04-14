import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'lt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentChecked,AfterContentInit{
  ngAfterContentInit(): void {
    console.log(this.roomscomp);
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
  }
  @ContentChild(RoomsComponent) roomscomp!:RoomsComponent;
}
