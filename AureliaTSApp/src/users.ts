import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(private http: HttpClient) {
   
  }

  activate() {
      this.http.configure(config => {
          config
              .useStandardConfiguration()
              .withBaseUrl('https://api.github.com/');
      });
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }

  getViewStrategy() {
      return 'users';
  }
}
