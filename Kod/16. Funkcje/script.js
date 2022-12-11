function simpleFunction() {
    console.log('Wywołano simplefunction');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('jakiś tekst');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + ' + '+ b + ' = ' + sum);
}

sumOfTwo(2,4)

function functionWithReturn() {
    return 'jakiś tekst';
}

console.log(functionWithReturn());