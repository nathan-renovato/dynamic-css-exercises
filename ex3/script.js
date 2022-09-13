const body = document.querySelector('body');
const colors = document.querySelectorAll('.container-squares div');

colors.forEach(color => {
    color.addEventListener('click', function () {
        body.removeAttribute('class');
        body.classList.add(this.id);
    })
})