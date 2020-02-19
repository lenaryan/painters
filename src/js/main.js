​document.addEventListener('click', function(e) {
    var el = e.toElement;
    if (el.classList.contains('worker__price')) {
        el.classList.toggle('worker__price--chosen');
        if (el.classList.contains('worker__price--chosen')) {
            el.innerText = 'Lisätty listalle';
        } else {
            el.innerText = 'Pyydä tarjous!';
        }
    }
});