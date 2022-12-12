window.onload = function () {
    let rowNumber = document.getElementById('row-number');
    let colNumber = document.getElementById('column-number');
    console.log(rowNumber)
    console.log(colNumber)
    let container = document.getElementById('table');

    document.getElementById('create').addEventListener('click', function () {
        clearTable()
        for (let i = 1; i <= rowNumber.value; i++) {
            let newRow = document.createElement('tr');
            let row = container.appendChild(newRow);
            for (let j = 1; j <= colNumber.value; j++) {
                let column = document.createElement('td');
                column.classList.add('box')
                row.appendChild(column)
            }
        }
    })
    document.getElementById('clear').addEventListener('click', function () {
        clearTable()
    });

    function clearTable() {
        container.replaceChildren();
    }
};