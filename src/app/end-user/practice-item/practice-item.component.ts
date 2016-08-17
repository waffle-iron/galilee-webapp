import { Component, OnInit, Input } from '@angular/core';

//import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-practice-item',
  templateUrl: 'practice-item.component.html',
  styleUrls: ['practice-item.component.css'],
  directives: [],
})
export class PracticeItemComponent implements OnInit {

  @Input() reading: any;
  @Input() practice: any;
  @Input() practiceGeneralInformation: any;

  constructor() {}

  ngOnInit() {
  }

}
