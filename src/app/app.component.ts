import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  public token:any;

  ngOnInit() {
    this.token = localStorage.getItem('token')
    console.log(this.token);
  
    
  }
}

