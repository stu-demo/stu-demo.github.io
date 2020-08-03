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
  var menulinks = document.getElementsByClassName('menu-link');
  var d = menulinks[0].clientHeight+12;
  console.log(d);
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
  var movieDataWrapper = document.getElementById('movie-data-wrapper');
  var DataTitle = document.getElementById('movie-data-title');
  var DataAge = document.getElementById('movie-data-age');
  var DataTime = document.getElementById('movie-data-time');
  var movieData = [DataTitle,DataAge, DataTime];


  /*POSTER*/
  var getMovie = function(e) {
    if (e.target == '[object HTMLDivElement]') {
      var el = e.target.children[1].children[0];
    } else {
      var el = e.target.nextElementSibling.children[0];
    }
    return el;
  }
  if (window.innerWidth >= 768) {
    var hover = function(e) {
      movieDataWrapper.style.display = "block";
      var element = e.target.children[0].nextElementSibling.children[0];
      var i = 0;
      while (element) {
        movieData[i].textContent = element.textContent;
        element = element.nextElementSibling;
        i++;
        if (i == 3) {
          return false;
        }
      }
    }
    var mouseleave = function() {
      movieDataWrapper.style.display = "none";
    }
  } else {
    var movietouchstart = function(e) {
      e.stopPropagation();
      var touch = e.targetTouches[0];
      var element = getMovie(touch);
      movieDataWrapper.style.zIndex = "10";
      movieDataWrapper.style.opacity = "1";
      movieDataWrapper.style.transitionDelay = "0.3s";
      var i = 0;
      while (element) {
        movieData[i].textContent = element.textContent;
        element = element.nextElementSibling;
        i++;
        if (i == 3) {
          return false;
        }
      }
    }
    var movietouchend = function(e) {
      var touch = e.changedTouches[0];
      var element = getMovie(touch);
      movieDataWrapper.style.zIndex = "0";
      movieDataWrapper.style.opacity = "0";
      movieDataWrapper.style.transitionDelay = "0s";
    }
  }

  /*POPUP*/
  var showpopup = function(e) {
    popup.style.display = "block";
    if (window.innerWidth < 768) {
      popup.style.height = window.innerHeight + 'px';
      document.body.style.overflowY = 'hidden';
    }
    for (var i=0; i < date.length; i++) {
      date[i].style.opacity = '0';
    }
    var el = getMovie(e)
    var i = 0;
    while (el) {
      info[i].textContent = el.textContent;
      el = el.nextElementSibling;
      i++;
    }
  }
  
  close.onclick = function() {
    popup.scrollTop = 0;
    popup.style.display = "none";
    if (window.innerWidth < 768) {
      document.body.style.overflowY = 'auto';
    }
    for (var i=0; i < date.length; i++) {
      date[i].style.opacity = '1';
    }
  }

/*
  var buybutton = document.getElementsByClassName('button-buy');
  var buyticket = function(e){
    var posX = e.clientX;
    var posY = e.clientY;
    buybutton[0].style.left = e.clientX + 'px';
    buybutton[0].style.top = e.clientY + 'px';
  };
*/

  for (var i=0; i<movie.length; i++) {
    movie[i].addEventListener('mouseenter',hover);
    movie[i].addEventListener('mouseleave',mouseleave);
    movie[i].addEventListener('touchstart',movietouchstart);
    movie[i].addEventListener('touchend',movietouchend);
    movie[i].addEventListener('click',showpopup);
  }
  popup.addEventListener('mousemove',buyticket);
};