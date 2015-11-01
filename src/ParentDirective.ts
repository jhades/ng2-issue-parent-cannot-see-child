
import {Directive,QueryList, Query} from "angular2/angular2";
import {ChildDirective} from './ChildDirective';

@Directive({
    selector: '[parent-directive]'
})
export class ParentDirective {

    childs = [];

    constructor(@Query(ChildDirective) childs: QueryList<ChildDirective>) {
        console.log("building parent directive");

        childs.changes.toRx().subscribe(() => {

            this.childs = childs.toArray();

            if (this.childs.length === 0) {
                console.log('CANNOT QUERY CHILD DIRECTIVES !! total childs seen by @Query = ' + this.childs.length);
            }
            else {
                console.log("Parent directive can see " + childs.length + " child directives, as expected");
            }

        });
    }

}