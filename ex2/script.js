const inputName = document.querySelector('#input-name');
const buttonSave = document.querySelector('#btn-save');
const buttonClear = document.querySelector('#btn-clear');
const strongWelcome = document.querySelector('#welcome');

const username = localStorage.getItem('user');

strongWelcome.innerText = `${username ? `Seja bem vindo, ${username}!` : ''}`;

buttonSave.addEventListener('click', function () {
    if (!inputName.value) {
        return;
    }

    localStorage.setItem('user', inputName.value);
    strongWelcome.textContent = `Bem vindo, ${inputName.value}!`;

    inputName.value = '';
});


buttonClear.addEventListener('click', function () {
    strongWelcome.textContent = '';

    localStorage.removeItem('user');

    // localStorage.clear();
});