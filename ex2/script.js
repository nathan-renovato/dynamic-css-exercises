const body = document.querySelector('body');
const inputName = document.querySelector('#input-name');
const buttonSave = document.querySelector('#btn-save');
const strongWelcome = document.querySelector('#welcome');


const username = localStorage.getItem('user');

strongWelcome.textContent = username ? `Seja bem vindo, ${username}!` : 'Seja bem vindo, fulano!';

buttonSave.addEventListener('click', function () {
    if (!inputName || inputName.value === '') {
        return;
    }

    localStorage.setItem('user', inputName.value);
    inputName.value = '';
})