document.querySelector('.footer-section h3').addEventListener('click', function() {
    var ul = this.nextElementSibling;
    ul.classList.toggle('visible');
    });