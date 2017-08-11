import { Observable } from "rxjs";
import { load, loadWithFetch } from "./loader";

/* let source = Observable.merge(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.of(5),
); */

let source = Observable.onErrorResumeNext(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.of(5),
);

source.subscribe(
    val => console.log(`val: ${val}`),
    err => console.log(`err: ${err}`),
    () => console.log('complete')
);


/* let button = document.getElementById("button");
let output = document.getElementById("output");

let click = Observable
    .fromEvent(button, 'click')

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    });
}

click
    .flatMap(e => loadWithFetch('movies.json'))
    .subscribe(
        renderMovies,
        e => console.log(`value: ${e}`),
        () => console.log(`complete`)
    ); */