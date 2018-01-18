import { Component } from '@angular/core';

@Component({
  selector: 'admin-header',
   templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AdminHeaderComponent {
 
  Name:string;
  pageTitle:string;
  constructor(){
  }
ngOnInit() {
  }
}
