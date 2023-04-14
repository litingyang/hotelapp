import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {
    this.name.nativeElement.innerText = "111";
  }
  @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name',{static:true}) name!: ElementRef;
  ngAfterViewInit(): void {
    const comref = this.vcr.createComponent(RoomsComponent);
    comref.instance.numberOfRooms = 11;
  }
  title = 'hotelinventoryapp';
  role = 'Admin';
}
