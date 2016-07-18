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

    //ViewLocator.prototype.convertOriginToViewUrl = (origin: Origin) => {
    //    let moduleId: string = origin.moduleId;
    //    let id: string = (moduleId.substr(moduleId.length - 3) == ".js") || (moduleId).substr(moduleId.length - 3) === ".ts"
    //        ? moduleId.substring(0, moduleId.length - 3) : moduleId;
    //    return moduleId;
    //}

    aurelia.start().then(() => aurelia.setRoot());
}
