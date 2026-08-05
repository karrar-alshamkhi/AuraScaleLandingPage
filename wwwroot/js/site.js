// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Mobile navigation toggle
(function () {
    var toggle = document.querySelector('.site-nav__toggle');
    var nav = document.getElementById('site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
}());

// Image comparison slider
(function () {
    var container = document.querySelector('.img-compare');
    var slider = document.querySelector('.img-compare__slider');

    if (container && slider) {
        slider.addEventListener('input', function (e) {
            container.style.setProperty('--position', e.target.value + '%');
        });
    }
}());
