import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1> {{ message }}',
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  message: string;
  constructor(public http: Http) {
    this.http.get('http://localhost:3000/api')
      .subscribe(
      data => this.message = data.json().some,
      err => console.log(err)
      );
  }
}
