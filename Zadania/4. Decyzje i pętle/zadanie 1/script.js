// 1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
//     Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
// podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
//     Zadanie wykonaj z wykorzystaniem konstrukcji IF

function numbers(num) {
    if (num % 2) {
        console.log('Liczba nieparzysta');
    }else {
        console.log('Liczba parzysta');
    }
}

numbers(201);
