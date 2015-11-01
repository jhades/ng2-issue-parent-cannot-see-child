
import {Directive,Host} from "angular2/angular2";
import {ParentDirective} from './ParentDirective';

@Directive({
    selector: '[child-directive]'
})
export class ChildDirective {

    /**
     *
     * This version of the constructor uses @Host to inject the parent directive. It seems its the use of @Host that triggers the error.
     * With this setup, the parent by some reason cannot query anymore the children.
     *
     */
    constructor(@Host(ParentDirective) parent: ParentDirective) {
        console.log("building child directive with injected parent.");
    }


    /**
     *
     * Comment the version of the constructor above, and uncomment the version bellow.
     * If the child does not have the parent injected via @Host, it works just fine.
     *
     */

    /*
    constructor() {
        console.log("building child directive");
    }
    */

}