window.onload = function () {

    let exitUserName = ['admin','user'];
    let usernameInput = document.getElementById('username');
    let usernameError = document.getElementById('user-name-error')


    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();

        if (validUser()){
            window.alert('Poprawnie wysłany formularz');
        }

    });

    function validUser() {
        let userValid = true;

        if (!checkRequiredInput(usernameInput)) {
            userValid = false;
            setErrorText('Podaj nazwę użytkownika')
        }else if (!checkMinMaxLengt(usernameInput,3,12)){
            userValid = false;
            setErrorText('Nazwa użytkownika powinna mieć długość od 3 do 12 znaków')
        }else if (checkExistUsername(usernameInput)){
            userValid = false;
            setErrorText('Nazwa użytkownika została już wysłana')
        }else
            usernameError.setAttribute('hidden','')
        return userValid;
    }
    function checkRequiredInput (input) {
        return input.value.length > 0;
    }

    function checkMinMaxLengt(input, min,max) {
        return input.value.length >= min && input.value.length <= max;
    }
    function checkExistUsername(input) {
        return exitUserName.includes(input.value);
    }

    function setErrorText(msg) {
        usernameError.textContent = msg;
        usernameError.removeAttribute('hidden');
    }
};