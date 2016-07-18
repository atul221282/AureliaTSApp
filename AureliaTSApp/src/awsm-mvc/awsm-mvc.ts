import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class AwsmMvc {
    name: string;
    http: HttpClient;
    user: any;

    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    activate() {
        return true;
    }

    getViewStrategy() {
        return 'awsm-mvc/awsm-mvc';
    }

}