import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getUserName().subscribe((user: string) => this.user = user);
  }

  goToFeed(){
    this.router.navigateByUrl('/feed');
  }

}
