export class GetMain {
    userName: string;
    constructor() {
        
    }

    activate(bindingContext: any) {
        this.userName = bindingContext;
    }

}