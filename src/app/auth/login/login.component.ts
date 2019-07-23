import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store, State } from '@ngrx/store';
import { UserLogin } from '../auth-actions.actions';
import { getUser } from '../auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = 'eliran';
  constructor(
    private store: Store<any>) { }

  ngOnInit() {
    this.store.select(getUser);
  }

  submit(form) {
    // this.authService.login(form.value['email']);
    this.store.dispatch(new UserLogin(form.value['email']));

  }

}
