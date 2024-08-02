//^ 1. counter javascript

let counter = document.getElementById('counter');
let count = 0;

function increment() {
    count++;
    counter.innerHTML = count;
}

function decrement() {
    count--;
    counter.innerHTML = count;
}

function reset() {
    count = 0;
    counter.innerHTML = count;
}


