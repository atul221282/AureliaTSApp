import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class Login {
    name: string;
    http: HttpClient;
    user: any;

    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    activate() {
            this.http.configure(config => {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:54170/');
            });

            return this.http.fetch('Home/GetLoginModel')
                .then(response => response.json())
                .then(data => this.user = data);
    }

    getViewStrategy() {
        return 'login/login';
    }

}