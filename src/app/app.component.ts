import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  ngOnInit(){
    this.title= "Bankinter"
  }

  childIsClicked(info: string){
    console.log(`Click on the child button: ${info}`)
  }
}
