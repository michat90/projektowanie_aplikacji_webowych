// 2)  Napisz funkcję która wypisze na konsole liczby od 1 do 100 podzielne przez 3.

function dividedByThree (){
    for (let i = 1; i < 101 ; i++) {
        if (i % 3 == 0) {
            console.log('liczba ' + i + ' jest podzielna przez 3.');
        }
    }
}

dividedByThree();