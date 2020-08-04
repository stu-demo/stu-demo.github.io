window.onload = function () {
    /*MENU ANIMATION*/
    var logo = document.getElementById('logo');
    var menulinks = document.getElementsByClassName('menu-link');
    var d = menulinks[0].clientHeight+12;
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

    var qa = document.getElementsByClassName('qa-item');
    var answer = function(e){
        var el = e.target.closest('.qa-item');
        console.log(el);
        if (el.classList.contains('qa-open')) {
            el.classList.remove('qa-open');
        } else {
            for (var i=0; i < qa.length; i++) {
                qa[i].classList.remove('qa-open');
            }
            el.classList.add('qa-open');
        }
    }

    for (var i=0; i < qa.length; i++) {
        qa[i].addEventListener('click', answer);
    }
    
  };