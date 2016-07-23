import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {DialogController} from "aurelia-dialog";

@autoinject()
export class AwsmMvc {
    name: string;
    http: HttpClient;
    user: any;
    controller: DialogController;
    constructor(private httpClient: HttpClient, private ctrl: DialogController) {
        this.http = httpClient;
        this.controller = ctrl;
    }

    activate(bindingContext) {
        if (bindingContext) {
            this.user = bindingContext;
        }
        return true;
    }

    getViewStrategy() {
        return 'awsm-mvc/awsm-mvc';
    }

}