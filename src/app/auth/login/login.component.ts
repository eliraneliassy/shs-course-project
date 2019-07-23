import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store, State } from '@ngrx/store';
import { UserLogin } from '../auth-actions.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = 'eliran';
  constructor(private authService: AuthService,
    private store: Store<any>) { }

  ngOnInit() {
  }

  submit(form) {
    // this.authService.login(form.value['email']);
    this.store.dispatch(new UserLogin(form.value['email']));

  }

}
