import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  img = ['background_head.jpg'];
  headline = ['Hallo,mein Name ist Laura Andrašev Front End Developer.'];


  ngOnInit(){
    this.updateImage();
      
  }
  
  updateImage(){
    
  }

  constructor() { }



}
