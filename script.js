var buttons = document.querySelectorAll('.ripple');
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;

    var ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);

    setTimeout(function() {
      ripple.remove();
    }, 1000);
  });
});
