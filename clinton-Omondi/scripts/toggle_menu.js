const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.mobile-nav');

toggle.addEventListener('click', () => {
    const list = menu.classList;
    if (list.contains('open-menu')) {
        list.remove('open-menu');
    } else {
        list.add('open-menu');
    }
});