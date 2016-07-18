import 'bootstrap';
import {Aurelia, ViewLocator, Origin} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    //Uncomment the line below to enable animation.
    aurelia.use.plugin('aurelia-animator-css');

    //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    //aurelia.use.plugin('aurelia-html-import-template-loader')
    ViewLocator.prototype.convertOriginToViewUrl = (origin: Origin) => {
        var moduleId: string = origin.moduleId;
        var name = moduleId.split('/')[moduleId.split('/').length - 1].replace('ViewModel', 'View').replace('.js', '').replace('.ts', '');
        if (name === 'login')
            return `./src/${name}/${name}`;

        return `./dist/${name}.html`;
    }
    aurelia.start().then(() => aurelia.setRoot());
}
