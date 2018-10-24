import { Component } from '@angular/core';
import{Goal}from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Catch-up';
  public h2='My Goals'
  
  
  constructor(){
  }
}

