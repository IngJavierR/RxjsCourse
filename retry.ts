import { Observable } from "rxjs";

let button = document.getElementById("button");
let output = document.getElementById("output");

let click = Observable
    .fromEvent(button, 'click')

function load(url: string) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        });
        xhr.open('GET', url);
        xhr.send();
    }).retryWhen(retryStrategy({attemps: 3, delay: 1500}));
}

function retryStrategy({attemps = 4, delay = 1000}){
    return function(errors){
        return errors
            .scan((acc, value) => {
                console.log(acc, value);
                return acc + 1;
            }, 0)
            .takeWhile(acc => acc < 4)
            .delay(1000);
    }
}

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    });
}

click
    .flatMap(e => load('movies.json'))
    .subscribe(
        renderMovies,
        e => console.log(`value: ${e}`),
        () => console.log(`complete`)
    );