import { Component, OnInit } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private _router:Router, private title: Title){}

  ngOnInit() {
  }  
}