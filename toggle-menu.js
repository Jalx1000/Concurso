const main = document.getElementById('main');
const toggleMenu = document.getElementById('toggle-menu');

main.addEventListener("click",(e) => {
    if (e.target.id == 'toggle-menu' || e.target.parentElement.id == 'toggle-menu') {
        console.log('tocaste el toggle');
        sidebar.classList.toggle('active');
        main.classList.toggle('active');
        toggleMenu.classList.toggle('show');
    }
    console.log(e.target.id);
});

console.log('@sauterdev');