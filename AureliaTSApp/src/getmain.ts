import {autoinject} from 'aurelia-framework';
import {InlineViewStrategy} from 'aurelia-framework';
import {HttpClient, HttpClientConfiguration} from 'aurelia-fetch-client';

@(autoinject)
export class GetMain {
    userName: string;
    inlineViewStartegy: InlineViewStrategy;
    httpClient: HttpClient;
    constructor(private viewStrategy: InlineViewStrategy, private httpCl: HttpClient) {
        this.inlineViewStartegy = viewStrategy;
        this.httpClient = httpCl;
    }

    activate(bindingContext: any) {
        this.userName = bindingContext;
    }

    //getViewStrategy() {
    //    return new InlineViewStrategy('<template>Hello</template>');
    //}

}