window.onload = function () {
  var show1 = document.getElementById('show-1');
  var show2 = document.getElementById('show-2');
  var movie = document.getElementsByClassName('movie');
  var time = document.getElementsByClassName('time');


  /*SLIDER*/
  show1.onclick = function() {
    show2.style.opacity = '0.4';
    show1.style.opacity = '1';
    show1.nextElementSibling.textContent = '21:00';
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
    show1.nextElementSibling.textContent = '00:00';
    for (i=0; i<movie.length; i++) {
      movie[i].style.transform = 'translateX(-100%)';
    }
    for (i=0; i<time.length; i++) {
      //time[i].style.transform = 'translateX(-50%)';
    }
  }



  /*MENU ANIMATION*/
  var logo = document.getElementById('logo');
  var menulinks = document.getElementsByClassName('menu-link');
  var d = menulinks[0].clientHeight+7;
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
  var buybutton = document.getElementsByClassName('button-buy')[0];
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
  var scrtop;
  var wh = window.innerHeight;
  var date = document.getElementsByClassName('date');
  var day = document.getElementsByClassName('day')[0];
  var movieinfo = document.getElementsByClassName('movie-info-popup')[0];
  var showpopup = function(e) {
    popup.style.display = "block";
    var el = getMovie(e);
    scrtop = window.scrollY;
    var i = 0;
    var code = el.closest('.movie-text').nextElementSibling.textContent;
    var x = el.closest('.movie-text').closest('.movie').closest('.slider').closest('.overflow-container').previousElementSibling;
    while (el) {
      info[i].textContent = el.textContent;
      el = el.nextElementSibling;
      i++;
    }
    var onclicklink = 'ticketsteam.run(\'' + code + '\', \'https://api.tickets.yandex.net/widget\'' + ');return false;';
    buybutton.setAttribute('onclick',onclicklink);
    day.innerHTML = x.innerHTML;

    var wh2 = window.innerHeight;
    var diff = window.innerHeight - popup.scrollHeight;
    if (popup.scrollHeight >= window.innerHeight-72) {
      popup.style.height = window.innerHeight + 'px';
      if (window.innerWidth <= 768) {
        buybutton.style.position = 'fixed';
        movieinfo.style.paddingBottom = '72px';
        if (wh != wh2) {
          movieinfo.style.paddingBottom = (wh2-wh+72) + 'px';
        }
        document.body.style.position = 'fixed';
      } 
      document.body.style.overflowY = 'hidden';
    }
    for (var i=0; i < date.length; i++) {
      date[i].style.opacity = '0';
    }
  }
  
  close.onclick = function() {
    popup.style.height = 'auto';
    popup.style.display = "none";
    buybutton.style.position = 'sticky';
    movieinfo.style.paddingBottom = '12px'; 
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
    var scrtop2 = window.scrollY;
    if ((scrtop2 != scrtop) && (scrtop2 != 0)) {
      scrtop = scrtop2;
    }
    window.scrollTo(0,scrtop);
    for (var i=0; i < date.length; i++) {
      date[i].style.opacity = '1';
    }
  }

/*
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
    if (!movie[i].classList.contains('coming-soon')) {
      movie[i].addEventListener('click',showpopup);
    }
  }
  //popup.addEventListener('mousemove',buyticket);
};