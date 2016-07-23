import {inject, useView} from "aurelia-framework";
import {DialogController} from "aurelia-dialog";

@useView('common/delete-dialog')
@inject(DialogController)
export class DeleteDialog {
    contact: any;

    constructor(private controller: DialogController) {
        this.controller = controller;
    }

    activate(contact) {
        alert(JSON.stringify(contact));
        this.contact = contact;
    }

}