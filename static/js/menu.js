var icon = document.getElementById('icon1');
var plashka = document.getElementById('plashka');
var close = document.getElementById('icon2');
var menu = document.getElementById('menu');
var avatar = document.getElementById('avatar');

icon.onclick = function() {
    menu.classList.remove('state-two');
    menu.classList.add('state-one');
    close.classList.remove('state-react');
    close.classList.add('state-act');
    plashka.classList.remove('state-act');
    plashka.classList.add('state-react');
    avatar.classList.remove('state-act');
    avatar.classList.add('state-react');
}

close.onclick = function() {
    menu.classList.add('state-two');
    menu.classList.remove('state-one');
    close.classList.remove('state-act');
    close.classList.add('state-react');
    plashka.classList.remove('state-react');
    plashka.classList.add('state-act');
    avatar.classList.remove('state-react');
    avatar.classList.add('state-act');
}
