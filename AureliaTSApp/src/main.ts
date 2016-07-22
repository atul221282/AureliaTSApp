import 'bootstrap';
import {Aurelia, ViewLocator, Origin} from 'aurelia-framework';
import * as str from 'string';
import {LogManager} from 'aurelia-framework';
import {CustomLogAppender} from './custom-log-appender';

LogManager.addAppender(new CustomLogAppender());
LogManager.setLevel(LogManager.logLevel.debug);
export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    //Uncomment the line below to enable animation.
    aurelia.use.plugin('aurelia-animator-css');

    //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    //aurelia.use.plugin('aurelia-html-import-template-loader')

    //ViewLocator.prototype.convertOriginToViewUrl = (origin: Origin) => {
    //    var moduleId = origin.moduleId;

    //    var id = str(moduleId).endsWith('.js') || str(moduleId).endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;

    //    return id;
    //}

    aurelia.start().then(() => aurelia.setRoot());
}
