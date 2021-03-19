const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function togggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', togggleButton)