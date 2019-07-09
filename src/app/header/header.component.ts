import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';
import { SugestionsService } from '../sugestions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  user: string;
  search$: Subject<string> = new Subject<string>();
  searchSubscription: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private suggestionService: SugestionsService) { }

  ngOnInit() {
    this.authService.getUserName().subscribe((user: string) => this.user = user);

    this.searchSubscription = this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.suggestionService.getSuggestions(term)),
      filter(x => !!x),
      map((obj) => obj.items)
    )
    .subscribe((res) => console.log(res));
  }

  goToFeed() {
    this.router.navigateByUrl('/feed');
  }

  search(term) {
    this.search$.next(term);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

}
