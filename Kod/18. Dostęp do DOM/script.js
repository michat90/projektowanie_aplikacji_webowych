window.onload = function () {
    // document.getElementById('big-box').style.border = '3px solid red';

    // document.querySelector('#big-box').style.border = '3px solid red';

    // document.querySelector('.boxes').style.border = '3px solid red' // dostep do pierwszego elementu mimo ze jest ich wiecej

    // let array = document.getElementsByClassName('boxes') //jezeli jest wiecej elementow zwraca tablice
    // for (let el of array) {
    //     el.style.border = '3px solid red';
    // }

    // let array = document.getElementsByTagName('div');
    // for (let el of array) {
    //         el.style.border = '3px solid red';
    // }

    // let array = document.querySelectorAll('#big-box div');
    // for (let el of array) {
    //             el.style.border = '3px solid red';
    // }

    // document.getElementById('box-two').parentNode.style.border = '3px solid red';

    // document.getElementById('box-two').previousElementSibling.style.border = '3px solid red';
    // document.getElementById('box-two').nextElementSibling.style.border = '3px solid red';

    // document.getElementById('big-box').firstElementChild.style.border = '3px solid red';
    document.getElementById('big-box').lastElementChild.style.border = '3px solid red';
}