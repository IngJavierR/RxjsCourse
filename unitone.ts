import { Observable } from "rxjs";
/*import { Observable } from "rxjs";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";*/
let numbers = [1, 5, 10];
let source = Observable.from(numbers)
                .map(x => x * 2)
                .filter(x => x > 2);

source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`value: ${e}`),
    () => console.log(`complete`)
);

var num = [];
Observable
    .from(numbers)
    .filter(x => x >5)
    .subscribe(val => num.push(val));
console.log('Res: ' + num);