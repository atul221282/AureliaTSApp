import {bindable, useView} from 'aurelia-framework';

@useView('nav-bar')
export class NavBar {
    @bindable router;

    bind(bindingContext) {
    }

}