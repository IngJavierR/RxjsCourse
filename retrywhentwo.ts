import { Observable } from "rxjs";
import { load, loadWithFetch } from "./loader";

let button = document.getElementById("button");
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

loadWithFetch('moviess.json')
    .subscribe(renderMovies, 
        error => console.log(error),
        () => console.log('complete')
    );

click
    .flatMap(e => loadWithFetch('movies.json'))
    .subscribe(
        renderMovies,
        e => console.log(`value: ${e}`),
        () => console.log(`complete`)
    ); 