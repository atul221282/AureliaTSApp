import {autoinject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {DialogController} from "aurelia-dialog";

@autoinject()
export class AwsmMvc {
    name: string;
    http: HttpClient;
    user: any;
    @bindable list: any;
    controller: DialogController;
    constructor(private httpClient: HttpClient, private ctrl: DialogController) {
        this.http = httpClient;
        this.controller = ctrl;
        this.list = [
            { id: 1, name: "atul" },
            { id: 2, name: "bhanu" },
            { id: 3, name: "sonia" },
            { id: 4, name: "kapil" }
        ]

        setTimeout(() => { this.list[3].id = 5 }, 5000)
    }

    listChanged(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
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