window.onload = function () {
  var show1 = document.getElementById('show-1');
  var show2 = document.getElementById('show-2');
  var movie = document.getElementsByClassName('movie');
  var time = document.getElementsByClassName('time');


  /*SLIDER*/
  show1.onclick = function() {
    show2.style.opacity = '0.4';
    show1.style.opacity = '1';
    for (i=0; i<movie.length; i++) {
      movie[i].style.transform = 'translateX(0%)';
    }
    for (i=0; i<time.length; i++) {
      //time[i].style.transform = 'translateX(0%)';
    }
  }

  show2.onclick = function() {
    show2.style.opacity = '1';
    show1.style.opacity = '0.4';
    for (i=0; i<movie.length; i++) {
      movie[i].style.transform = 'translateX(-100%)';
    }
    for (i=0; i<time.length; i++) {
      //time[i].style.transform = 'translateX(-50%)';
    }
  }



  /*MENU ANIMATION*/
  var logo = document.getElementById('logo');
  var date = document.getElementsByClassName('date');
  var menulinks = document.getElementsByClassName('menu-link');
  var padd = 12;
  if (window.innerWidth < 768) {
    padd = 9;
  } else {
    document.body.onscroll = function() {
      var position = window.innerHeight-logo.offsetHeight-3*padd-date[0].clientHeight;
      var zerotoone = window.scrollY/(document.body.scrollHeight-window.innerHeight);
      for (i=0; i<menulinks.length; i++) {
        menulinks[i].style.transform = 'translateY(' + (position + padd*(i-4))*zerotoone/4*(i-4) + 'px)';
      }
    }
  }



  /*POPUP*/
  var popup = document.getElementById('popup');
  var title = document.getElementById('title');
  var age = document.getElementById('age');
  var movietime = document.getElementById('movie-time');
  var year = document.getElementById('year');
  var genre = document.getElementById('genre');
  var country = document.getElementById('country');
  var director = document.getElementById('director');
  var language = document.getElementById('language');
  var teaser = document.getElementById('teaser');
  var description = document.getElementById('description');
  var info = [title,age,movietime,year,genre,country,director,language,description];
  var close = document.getElementById('close-button');
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  var showpopup = function(e) {
  e.stopPropagation();
  popup.style.display = "block";
  if (window.innerWidth < 768) {
    popup.style.height = window.innerHeight + 'px';
    document.body.style.overflowY = 'hidden';
  }
  for (var i=0; i < date.length; i++) {
    date[i].style.opacity = '0';
  }
  var el = e.target;
  //var el = e.currentTarget.children[1].children[0];
  console.log(el);
  if (el == '[object HTMLDivElement]') {
    el = el.children[1].children[0];
  } else {
    el = el.nextElementSibling.children[0];
  }
  var i = 0;
  while (el) {
    info[i].textContent = el.textContent;
    console.log(info[i].textContent);
    el = el.nextElementSibling;
    i++;
    }
  }
  
  close.onclick = function() {
    popup.style.display = "none";
    if (window.innerWidth < 768) {
      document.body.style.overflowY = 'auto';
    }
    for (var i=0; i < date.length; i++) {
      date[i].style.opacity = '1';
    }
  }

  /*POSTER*/
  if (window.innerWidth >= 768) {
    var hover = function(e) {
      document.getElementById('movie-data-wrapper').style.display = "block";
      var element = e.target.children[0].nextElementSibling.children[0];
      document.getElementById('movie-data-title').textContent = element.textContent;
      document.getElementById('movie-data-age').textContent = element.nextElementSibling.textContent;
      document.getElementById('movie-data-time').textContent = element.nextElementSibling.nextElementSibling.textContent;
    }

    var mouseleave = function() {
      document.getElementById('movie-data-wrapper').style.display = "none";
    }

    for (var i=0; i<movie.length; i++) {
      movie[i].addEventListener('mouseenter',hover);
      movie[i].addEventListener('mouseleave',mouseleave);
      movie[i].addEventListener('click',showpopup);
    }
  } else {
    var movietouchstart = function(e) {
      e.stopPropagation();
      var touch = e.targetTouches[0];
      if (touch.target == '[object HTMLDivElement]') {
        var element = touch.target.children[1].children[0];
      } else {
        var element = touch.target.nextElementSibling.children[0];
      }
      document.getElementById('movie-data-wrapper').style.display = "block";
      document.getElementById('movie-data-title').textContent = element.textContent;
      document.getElementById('movie-data-age').textContent = element.nextElementSibling.textContent;
      document.getElementById('movie-data-time').textContent = element.nextElementSibling.nextElementSibling.textContent;
    }
  
    var movietouchend = function(e) {
      document.getElementById('movie-data-wrapper').style.display = "none";
    }
  
    for (var i=0; i<movie.length; i++) {
      movie[i].addEventListener('touchstart',movietouchstart);
      movie[i].addEventListener('touchend',movietouchend);
      movie[i].addEventListener('click',showpopup);
    }
  }


};