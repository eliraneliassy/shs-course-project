import { Component, OnInit } from '@angular/core';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[] = db;
  ngOnInit(): void {
    console.log(db);
  }
}
