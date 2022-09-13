const body = document.querySelector('body');
const squares = document.querySelectorAll('.square');

const handleChangebackgroundColorMain = (e) => {
    body.style.setProperty('--primary-color', e.target.id);
};

squares.forEach(square => {
    square.addEventListener('click', handleChangebackgroundColorMain)
})