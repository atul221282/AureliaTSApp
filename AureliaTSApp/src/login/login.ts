import {Message} from "../common/message";
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {AwsmMvc} from '../awsm-mvc/awsm-mvc';
import {DialogService} from 'aurelia-dialog';
import {DeleteDialog} from '../common/delete-dialog';

@autoinject()
export class Login {
    name: string;
    http: HttpClient;
    user: any;
    message: Message;
    dialogService: DialogService;
    constructor(private httpClient: HttpClient, private dialogFactory: DialogService,
        private msg: Message) {
        this.message = msg;
        this.http = httpClient;
        this.dialogService = dialogFactory;

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

        var promise = new Promise((resolve, reject) => {
            this.http.fetch('Home/GetLoginModel')
                .then(response => response.json())
                .then(data => this.user = data);
            return resolve(this.user);
        });




    }

    deleteModal2(user) {
        (this.dialogService).open({ viewModel: DeleteDialog, model: user }).then(response => {
            if (!response.wasCancelled) {

            }
        });
    }

    deleteModal(user) {
        (this.dialogService).open({ viewModel: DeleteDialog, model: user }).then(response => {
            if (!response.wasCancelled) {
                this.deleteModal2(user)
            }
        });
    }

    getViewStrategy() {
        return 'login/login';
    }

}