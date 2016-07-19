import * as toastr from 'toastr';

interface IMessage {
    showInfoMessage(message: string, title: string): void;

}

export class Message implements IMessage {

    showInfoMessage(message: string, title: string): void {
        toastr.info(message, title);
    }
}