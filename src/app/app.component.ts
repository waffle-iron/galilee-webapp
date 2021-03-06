import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ReadingService} from './shared/services/reading.service';
import {PracticeService} from './shared/services/practice.service';
import {ResourceService} from './shared/services/resource.service';
import {UserService} from './authentication/user.service';
import {User} from './shared/models/user.model';
import {ADMIN} from './shared/models/permission.model';
import {JournalService} from './shared/services/journal.service';
import {PostService} from './shared/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ReadingService,
    PracticeService,
    ResourceService,
    JournalService,
    PostService
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  private currentUser: User = null;
  private currentUserIsAdmin: boolean = false;

  // date: Date;
  // readings: Reading[] = [];
  // practices: Practice[] = [];
  // singleReading: Reading;
  // currentUser: User;

  private showPracticesDropdown: boolean = false;
  private showResourcesDropdown: boolean = false;
  private showAdminDropdown: boolean = false;

  constructor(private readingService: ReadingService,
              private practiceService: PracticeService,
              private journalService: JournalService,
              private userService: UserService,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit() {
    this.userService.watchCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.currentUserIsAdmin = this.userService.can(ADMIN);
      });

    // grab current user info if it exists....
    // if (this.userService.isLoggedIn()) {
    //   this.currentUser = this.userService.getCurrentUser();
    //   console.log('inside ngOnInit, and the user is logged in already');
    //   console.log(this.currentUser);
    // } else {
    //   console.log('inside ngOnInit, and the user is not logged in yet');
    //   console.log(this.currentUser);
    // }
    // // ...and sign up for the service in order to keep up with changes
    // this.userService.userAnnounced$.subscribe(
    //   user => {
    //     this.currentUser = user;
    //     console.log('inside app comp...user updated');
    //     console.log(this.currentUser);
    //   });
    //
    // this.date = new Date();
    // // FIXME hardcoded readings
    // this.readingService
    //   .getTodaysReadings()
    //   .subscribe(readings => {
    //       this.readings = readings
    //     }
    //   );
    // this.readingService.getSingleReading().then(
    //   (reading) => {
    //     this.singleReading = reading;
    //   }
    // );
    //
    // this.practiceService.getPractices().subscribe(
    //   practices => this.practices = practices
    // );
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/end-user/readings/today']);
  }

  goToJournal(){
    this.router.navigate(['/end-user/journal']);
  }

  goHome(){
    this.router.navigate(['/end-user']);
  }

  togglePracticesDropdown(event){
    event.stopPropagation();
    this.showPracticesDropdown = !this.showPracticesDropdown;
  }

  toggleResourcesDropdown(event){
    event.stopPropagation();
    this.showResourcesDropdown = !this.showResourcesDropdown;
  }

  toggleAdminDropdown(event){
    event.stopPropagation();
    this.showAdminDropdown = !this.showAdminDropdown;
  }



}
