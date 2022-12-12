window.onload = function () {
    let rowNumber = document.getElementById('row-number');
    let colNumber = document.getElementById('column-number');
    let container = document.getElementById('table');
    let color = document.getElementById('color');
    let rowSpanErr = document.getElementById('row-error')
    let colSpanErr = document.getElementById('col-error')

    document.getElementById('color').addEventListener('change', function () {
        let color = document.getElementById('color');
    })

    document.getElementById('create').addEventListener('click', function () {
        clearTable()
        if (!ValuesValid(rowNumber)) {
            setErrorText('Liczba wierszy powinna mieć wartość z przedziału 1-10', rowSpanErr)
        }else if(!ValuesValid(colNumber)) {
            setErrorText('Liczba kolumn powinna mieć wartość z przedziału 1-10', colSpanErr)
        }else {
            createGrid()
        }

    })
    document.getElementById('clear').addEventListener('click', function () {
        clearTable()
    });

    function clearTable() {
        container.replaceChildren();
    }

    function createGrid() {
        for (let i = 1; i <= rowNumber.value; i++) {
            let newRow = document.createElement('tr');
            let row = container.appendChild(newRow);
            for (let j = 1; j <= colNumber.value; j++) {
                let column = document.createElement('td');
                column.classList.add('box');
                column.style.backgroundColor = getColor(color);
                column.style.margin = '5px';
                row.appendChild(column);
            }
        }
    }

    function ValuesValid(input) {
        return input.value > 0 && input.value <= 10;
    }

    function getColor (input) {
        let pickedColor;
        if (input.value === 'Czerwony') {
            pickedColor = 'red';
        } else if (input.value === "Niebieski") {
            pickedColor = 'blue';
        } else {
            pickedColor = 'green';
        }
        return pickedColor;
    }

    function setErrorText(msg, element) {
        element.textContent = msg;
        element.removeAttribute('hidden');
    }
};