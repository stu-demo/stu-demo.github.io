window.onload = function () {
    /*MENU ANIMATION*/
    var logo = document.getElementById('logo');
    var date = document.getElementsByClassName('date');
    var menulinks = document.getElementsByClassName('menu-link');
    var d = date[0].clientHeight;
    console.log(d);
    if (window.innerWidth >= 768) {
      document.body.onscroll = function() {
        var position = window.innerHeight-logo.offsetHeight;
        var zerotoone = window.scrollY/(document.body.scrollHeight-window.innerHeight);
        for (i=0; i<menulinks.length; i++) {
          menulinks[i].style.transform = 'translateY(' + (position + d*(i-4))*zerotoone/4*(i-4) + 'px)';
        }
      }
    }
    
  };