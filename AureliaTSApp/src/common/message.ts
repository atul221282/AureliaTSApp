import * as toastr from 'toastr';

interface IMessage {
    showInfoMessage(message: string, title: string): void;

}

export class Message implements IMessage {

    constructor() {
        toastr.options.preventDuplicates = true;
        toastr.options.allowHtml = true;
        toastr.options.showMethod = 'slideDown';
        toastr.options.hideMethod = 'slideUp';
        toastr.options.closeMethod = 'slideUp';
    }

    /**
	* Show info message using toaster library
	*/
    showInfoMessage(message: string, title: string): void {
        toastr.info(message, title);
    }

    /**
	* Show error message using toaster library
	*/
    showErrorMessage(message: string, title: string): void {
        toastr.error(message, title);
    }

    /**
	* Show sccuess message using toaster library
	*/
    showSuccessMessage(message: string, title: string): void {
        toastr.success(message, title);
    }


}