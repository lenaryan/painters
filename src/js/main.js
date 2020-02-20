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

document.addEventListener('DOMContentLoaded', function() {
    // array of each worker's skillset
    var workerTags = document.querySelectorAll('.worker-tags');
    var chosenTags = null;

    document.querySelectorAll('.filter__btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.classList.toggle('filter__btn--chosen');

            // array of all checked tags
            chosenTags = document.querySelectorAll('.filter__btn--chosen');

            // show all workers if there're no checked tags, and hide otherwise
            if (chosenTags.length == 0) {
                document.querySelectorAll('.worker').forEach(function(worker) {
                    worker.style.display = 'flex';
                });
            } else {
                document.querySelectorAll('.worker').forEach(function(worker) {
                    worker.style.display = 'none';
                });
            }

            filterFunc(workerTags, chosenTags);
        })
    })
})

function filterFunc(workerTags, chosenTags) {
    workerTags.forEach(function(workerTag) {
        // for each skillset we iterate through all checked tags
        // if any checked tag is in the skillset, we show a worker
        chosenTags.forEach(function(chosenTag) {
            if (workerTag.innerText.indexOf(chosenTag.innerText) > -1) {
                workerTag.parentElement.parentElement.style.display = 'flex';
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    var mobmenu = document.querySelector('.mobile-nav')
    document.querySelector('.mobile-menu__icon').addEventListener('click', function() {
        if (mobmenu.classList.contains('open-menu')) {
            mobmenu.classList.add('close-menu');
            mobmenu.classList.remove('open-menu');
        } else {
            mobmenu.classList.remove('close-menu');
            mobmenu.classList.add('open-menu');
        }
    })
})