import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bnk-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childName: string;
  @Output() childClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.childClicked.emit('Yes indeed')
  }

}
