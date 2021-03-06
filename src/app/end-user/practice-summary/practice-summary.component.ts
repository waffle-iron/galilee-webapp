import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practice-summary',
  templateUrl: './practice-summary.component.html',
  styleUrls: ['./practice-summary.component.css']
})
export class PracticeSummaryComponent implements OnInit {

  @Input() practiceData: any;
  @Input() dateString: string;
  @Input() readingIndex: number;
  @Input() practiceIndex: number;
  @Output() onSummaryClosed = new EventEmitter();

  private turnOffSummary = false;

  constructor() { }

  ngOnInit() {
    console.log(this.practiceData);
  }

  closeSummary() {
    this.onSummaryClosed.emit(this.turnOffSummary);
  }

  /*
  beginPracticeSteps(){
    if (this.practiceData.steps.length > 0){
      // go to the first step
      this.router.navigate(['/end-user/reading-practice', this.dateString, this.readingIndex, this.practiceIndex, this.stepIndex]);
    } else {
      //oops!  no steps, go back to the readings page
      this.router.navigate(['']);
    }
  }
  */
}
