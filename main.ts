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

let subscription = 
    load('movies.json')
        .subscribe(renderMovies, 
            error => console.log(error),
            () => console.log('complete')
        );

console.log(subscription);
//subscription.unsubscribe();
/*
Executes when unsuscribe into the observable
return () =>{

}
*/


click
    .flatMap(e => loadWithFetch('moviess.json'))
    .subscribe(
        renderMovies,
        e => console.log(`value: ${e}`),
        () => console.log(`complete`)
    ); 