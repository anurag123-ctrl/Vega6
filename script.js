document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('navbar-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('show');
});