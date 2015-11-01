import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {ChildDirective} from './ChildDirective';
import {ParentDirective} from "./ParentDirective";

@Component({
    selector: 'hello-app',
    directives: [ParentDirective, ChildDirective, CORE_DIRECTIVES],
    template: `
        <h2>Open the console, there is logging to explain what is going on</h2>

        <h4>Parent Directive has 3 child directives, but cannot query them - this is the issue, likely caused by using @Host in the child directive to inject the parent</h4>
        <h4 style="color:red">Open ChildDirective.ts for more details</h4>

        <div parent-directive>
            <div *ng-for="#child of childs;">
                <div child-directive>{{child}}</div>
            </div>
        </div>
    `
})
export class HelloApp {
    childs: string[] = ['child 1', 'child 2', 'child 3'];
}

bootstrap(HelloApp);