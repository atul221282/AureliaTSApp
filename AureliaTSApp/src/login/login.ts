import {Message} from "../common/message";
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@autoinject()
export class Login {
    name: string;
    http: HttpClient;
    user: any;
    message: Message;
    constructor(private httpClient: HttpClient, private msg: Message) {
        this.message = msg;
        this.http = httpClient;

    }

    activate() {
        
        setTimeout(
            () => this.message.showInfoMessage("welcome to login", "Login"),
            1000);

        this.http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost/AureliaTSApp/');
        });

        return this.http.fetch('Home/GetLoginModel')
            .then(response => response.json())
            .then(data => this.user = data);
    }

    getViewStrategy() {
        return 'login/login';
    }

}