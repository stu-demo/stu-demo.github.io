window.onload = function () {
  var show1 = document.getElementById('show-1');
  var show2 = document.getElementById('show-2');
  var posters = document.getElementsByClassName('posters');
  var poster = document.getElementsByClassName('poster');
  var time = document.getElementsByClassName('time');

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
  var popup = document.getElementById('popup');

  var info = [title,age,movietime,year,genre,country,director,language,description];

  var close = document.getElementById('close-button');


  /*POSTER*/
  show1.onclick = function() {
    show2.style.opacity = '0.4';
    show1.style.opacity = '1';
    for (i=0; i<posters.length; i++) {
      posters[i].style.transform = 'translateX(0%)';
    }
    for (i=0; i<time.length; i++) {
      time[i].style.transform = 'translateX(0%)';
    }
  }

  show2.onclick = function() {
    show2.style.opacity = '1';
    show1.style.opacity = '0.4';
    for (i=0; i<posters.length; i++) {
      posters[i].style.transform = 'translateX(-50%)';
    }
    for (i=0; i<time.length; i++) {
      time[i].style.transform = 'translateX(-103%)';
    }
  }

  var hover = function(e) {
    document.getElementById('movie-data-wrapper').style.display = "block";
    el = e.target.nextElementSibling.childNodes[0].nextElementSibling;
    document.getElementById('movie-data-title').textContent = el.textContent;
    document.getElementById('movie-data-age').textContent = el.nextElementSibling.textContent;
    document.getElementById('movie-data-time').textContent = el.nextElementSibling.nextElementSibling.textContent;
  }

  var mouseleave = function() {
    document.getElementById('movie-data-wrapper').style.display = "none";
  }

  var click = function(e) {
    popup.style.display = "block";
    popup.style.height = window.innerHeight + 'px';
    document.body.style.overflowY = 'hidden';
    el = e.target.nextElementSibling.childNodes[0].nextElementSibling;
    var i = 0;
    while (el) {
      info[i].textContent = el.textContent;
      console.log(info[i].textContent);
      el = el.nextElementSibling;
      i++;
    }
  }

  for (var i=0; i<poster.length; i++) {
    poster[i].addEventListener('mouseenter',hover);
    poster[i].addEventListener('mouseleave',mouseleave);
    poster[i].addEventListener('click',click);
  }

  close.onclick = function() {
    popup.style.display = "none";
    document.body.style.overflowY = 'auto';
  }



  /*MENU ANIMATION*/
  var menu = document.getElementById('menu');
  var date = document.getElementsByClassName('date');
  var menulinks = document.getElementsByClassName('menu-link');
  var padd = 12;
  document.body.onscroll = function() {
    var position = window.innerHeight-menu.offsetHeight-3*padd-date[0].clientHeight;
    console.log(position);
    var zerotoone = window.scrollY/(document.body.scrollHeight-window.innerHeight);
    console.log(zerotoone);
    for (i=0; i<menulinks.length; i++) {
      menulinks[i].style.transform = 'translateY(' + (position + padd*(i-4))*zerotoone/4*(i-4) + 'px)';
    }
  }

};