import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {EndUserComponent} from './end-user.component';
import {PracticeItemComponent} from './practice-item';
import {ReadingItemComponent} from './reading-item';
import {ReadingPracticeComponent} from './reading-practice';
import {ReadingResourceComponent} from './reading-resource';
import {ReadingsComponent} from './readings';
import {ResourceItemComponent} from './resource-item';

import {MaterializeModule} from "angular2-materialize";


import {SimpleModalComponent} from './readings/simple-modal.component';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';
import { PracticeListComponent } from './practice-list/practice-list.component';
import { PracticeSummaryComponent } from './practice-summary/practice-summary.component';


@NgModule({
  declarations: [
    EndUserComponent,
    PracticeItemComponent,
    ReadingItemComponent,
    ReadingPracticeComponent,
    ReadingResourceComponent,
    ReadingsComponent,
    ResourceItemComponent,
    SimpleModalComponent,

    TruncatePipe,

    PracticeListComponent,

    PracticeSummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterializeModule
  ]
})
export class EndUserModule { }
