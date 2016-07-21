import {Router, RouterConfiguration} from 'aurelia-router';
import {useView} from 'aurelia-framework';

@useView('app')
export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
            { route: 'login', name: 'login', moduleId: './login/login', nav: true, title: 'Login' },
            { route: 'Mvc', name: 'Mvc', moduleId: './awsm-mvc/awsm-mvc', nav: true, title: 'Mvc' }
        ]);

        this.router = router;
    }

}
