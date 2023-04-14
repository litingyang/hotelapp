import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title:string="";
  constructor (){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
