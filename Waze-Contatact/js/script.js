document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('.footer-section h3');
  headers.forEach(function(header) {
      header.addEventListener('click', function() {
          var ul = this.nextElementSibling;
          ul.classList.toggle('visible');
      });
  });
});



    // menu hambug
    // function menuOnClick() {
    //     document.getElementById("menu-bar").classList.toggle("change");
    //     document.getElementById("nav").classList.toggle("change");
    //     document.getElementById("menu-bg").classList.toggle("change-bg");
    //   }
      function menuOnClick() {
        document.getElementById("menu").classList.toggle("menu-active");
      }