import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { withCache } from '@ngneat/cashew';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example-app';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('https://quotes.rest/qod.json?category=inspire', {
        context: withCache({
          version: 'v1',
          key: 'users'
        })
      })
      .subscribe(console.log);
  }
}
