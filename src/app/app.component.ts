import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { db } from './db';
import { Item } from './item';
import { FeedService } from './services/feed.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

  user: string;
  userSub: Subscription;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.setUserName('Motti');
    this.userSub =
      this.authService.getUserName()
        .subscribe((user: string) => this.user = user);
  }

  changeName() {
    this.authService.setUserName('Shai');
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }



}
