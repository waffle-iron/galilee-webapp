import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-reading-item',
  templateUrl: 'reading-item.component.html',
  styleUrls: ['reading-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ReadingItemComponent implements OnInit {

  @Input() reading: any;
  @Input() practices: any;
  @Input() resources: any;
  @Input() includeBackButton: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  displayInfo(reading){
    console.log(reading);
  }

  onSelectPractice(reading, practice) {
    this.router.navigate(['/end-user/reading-practice', reading.id, practice.id]);
  }

  onSelectResource(reading, resource) {
    this.router.navigate(['/end-user/reading-resource', reading.id, resource.id]);
  }

}