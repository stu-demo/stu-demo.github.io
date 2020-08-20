window.onload = function () {
  var date = document.getElementsByClassName('date');
  for (var i = 0; i<date.length; i++) {
    date[i].style.opacity = '1';
  }

    /*MENU ANIMATION*/
    /*
    var logo = document.getElementById('logo');
    var menulinks = document.getElementsByClassName('menu-link');
    var d = menulinks[0].clientHeight+15;
    if (window.innerWidth > 768) {
      document.body.onscroll = function() {
        var position = window.innerHeight-logo.offsetHeight;
        var zerotoone = window.scrollY/(document.body.scrollHeight-window.innerHeight);
        for (i=0; i<menulinks.length; i++) {
          menulinks[i].style.transform = 'translateY(' + (position + d*(i-2))*zerotoone/2*(i-2) + 'px)';
        }
      }
    }
    */

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


    // SCHEME PHOTO
    var thispic;
    var flag = document.getElementsByClassName('flag');
    var flagclick = function(e) {
      var picname ='pic-' + e.target.className.match(/\d+/g);
      thispic = document.getElementsByClassName(picname)[0];
      thispic.style.opacity = '1';
    }

    var flagclose = function(e) {
      thispic.style.opacity = '0';
    }
    
    for (var i=0; i < flag.length; i++) {
      flag[i].addEventListener('mouseenter', flagclick);
      flag[i].addEventListener('mouseleave', flagclose);
  }

  };