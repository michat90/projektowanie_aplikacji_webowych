window.onload = function () {
    let rowNumber = document.getElementById('row-number');
    let colNumber = document.getElementById('column-number');
    console.log(rowNumber)
    console.log(colNumber)
    let container = document.getElementById('big-box');

  document.getElementById('create').addEventListener('click',function (){
      let element = document.createElement('div');
      element.classList.add('box');
      for (let i = 1; i <= rowNumber.value ; i++) {
          for (let j = 1; j <= colNumber.value ; j++) {
              container.appendChild(element);
          }
      }
  })
};