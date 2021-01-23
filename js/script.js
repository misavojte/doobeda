  var btnkampane = document.getElementById("btnkampane");
  var btngrafika = document.getElementById("btngrafika");
  var btnweby = document.getElementById("btnweby");

  var textkampane = document.getElementsByClassName("kampane-t");
  var textweby = document.getElementsByClassName("weby-t");
  var textgrafika = document.getElementsByClassName("grafika-t");
  var obrkampane = document.getElementsByClassName("kampane-o");
  var obrweby = document.getElementsByClassName("weby-o");
  var obrgrafika = document.getElementsByClassName("grafika-o");
  var i;
  var activeTopic = 1; //1 pro grafiku, 2 pro weby, 3 pro kampane
  var notfadingOut = true;

  var navicon = document.getElementById("nav-icon3");
  var navitems = document.getElementById("nav-items");
  var menuodkazy = document.getElementsByClassName("menu-hrefs");
  var navbar = document.getElementById("navbar");
  var toggledmenu = false;

btnkampane.addEventListener("mouseover", kamAniStart);
btnweby.addEventListener("mouseenter", webyAniStart);
btngrafika.addEventListener("mouseenter", grafiAniStart);

function kamAniStart() {
  if (activeTopic != 1 && notfadingOut) {

    activeTopic = 1;
    notfadingOut = false;

    btngrafika.classList.remove("active-dot");
    btnweby.classList.remove("active-dot");

    document.documentElement.style.setProperty('--main-col', "#FF1654");

    btnkampane.classList.add("active-dot");

    slideOutTextAnim();

    setTimeout(function() {
      changeTextAnim();
    }, 300);
  }
}

function webyAniStart() {
  if (activeTopic != 2 && notfadingOut) {

    activeTopic = 2;
    notfadingOut = false;

    btngrafika.classList.remove("active-dot");
    btnkampane.classList.remove("active-dot");

    document.documentElement.style.setProperty('--main-col', "#F49912");

    btnweby.classList.add("active-dot");

    slideOutTextAnim();

    setTimeout(function() {
      changeTextAnim();
    }, 300);
  }
}

function grafiAniStart() {
  if (activeTopic != 3 && notfadingOut) {
    activeTopic = 3;
    notfadingOut = false;

    btnkampane.classList.remove("active-dot");
    btnweby.classList.remove("active-dot");

    document.documentElement.style.setProperty('--main-col', "#2492D8");

    btngrafika.classList.add("active-dot");

    slideOutTextAnim();

    setTimeout(function() {
      changeTextAnim();
    }, 300);
  }
}

function slideOutTextAnim() {
  for (var i = 0; i < textkampane.length; i++) {
    textkampane[i].classList.add("tra");
    textgrafika[i].classList.add("tra");
    textweby[i].classList.add("tra");
  };
  for (var i = 0; i < obrkampane.length; i++) {
    obrkampane[i].classList.add("tra2");
    obrgrafika[i].classList.add("tra2");
    obrweby[i].classList.add("tra2");
  };
  document.getElementById("kampurl").classList.add("tra");
  document.getElementById("grapurl").classList.add("tra");
  document.getElementById("webpurl").classList.add("tra");
}

async function changeTextAnim() {
  for (var i = 0; i < textkampane.length; i++) {
    textkampane[i].classList.add("hidden");
    textgrafika[i].classList.add("hidden");
    textweby[i].classList.add("hidden");
  };
  for (var i = 0; i < obrkampane.length; i++) {
    obrkampane[i].classList.add("hidden");
    obrgrafika[i].classList.add("hidden");
    obrweby[i].classList.add("hidden");
  };
  document.getElementById("kampurl").classList.add("hidden");
  document.getElementById("grapurl").classList.add("hidden");
  document.getElementById("webpurl").classList.add("hidden");

  new Promise(function(resolve, reject) {
    resolve(showTextAnim());
  });
};

async function showTextAnim() {

  notfadingOut = true;

  if (activeTopic == 1) {
    for (var i = 0; i < textkampane.length; i++) {
      textkampane[i].classList.remove("hidden");
    };
    for (var i = 0; i < obrkampane.length; i++) {
      obrkampane[i].classList.remove("hidden");
    };
    document.getElementById("grapurl").classList.remove("hidden");
    document.getElementById("webpurl").classList.remove("hidden");
  } else if (activeTopic == 3) {
    for (var i = 0; i < textkampane.length; i++) {
      textgrafika[i].classList.remove("hidden");
    };
    for (var i = 0; i < obrkampane.length; i++) {
      obrgrafika[i].classList.remove("hidden");
    };
    document.getElementById("grapurl").classList.remove("hidden");
    document.getElementById("kampurl").classList.remove("hidden");
  } else {
    for (var i = 0; i < textkampane.length; i++) {
      textweby[i].classList.remove("hidden");
    };
    for (var i = 0; i < obrkampane.length; i++) {
      obrweby[i].classList.remove("hidden");
    };
    document.getElementById("kampurl").classList.remove("hidden");
    document.getElementById("webpurl").classList.remove("hidden");
  };

  new Promise(function(resolve, reject) {
    resolve(slideInTextAnim());
  });
}

async function slideInTextAnim() {

  setTimeout(function () {

    if (activeTopic == 1) {
      for (var i = 0; i < textkampane.length; i++) {
        textkampane[i].classList.remove("tra");
      };
      for (var i = 0; i < obrkampane.length; i++) {
        obrkampane[i].classList.remove("tra2");
      };
      document.getElementById("grapurl").classList.remove("tra");
      document.getElementById("webpurl").classList.remove("tra");
    } else if (activeTopic == 3) {
      for (var i = 0; i < textkampane.length; i++) {
        textgrafika[i].classList.remove("tra");
      };
      for (var i = 0; i < obrkampane.length; i++) {
        obrgrafika[i].classList.remove("tra2");
      };
      document.getElementById("grapurl").classList.remove("tra");
      document.getElementById("kampurl").classList.remove("tra");
    } else {
      for (var i = 0; i < textkampane.length; i++) {
        textweby[i].classList.remove("tra");
      };
      for (var i = 0; i < obrkampane.length; i++) {
        obrweby[i].classList.remove("tra2");
      };
      document.getElementById("webpurl").classList.remove("tra");
      document.getElementById("kampurl").classList.remove("tra");
    };
  }, 50);

  };





navicon.addEventListener("click", toggleMenu);

function toggleMenu() {

    navbar.classList.toggle("open");
    navicon.classList.toggle("open");

    if (toggledmenu) {

      navitems.style.opacity = "";

      setTimeout(function()
        { navitems.classList.toggle("toggling");
          for (i = 0; i < menuodkazy.length; i++) {
            menuodkazy[i].removeEventListener("click", toggleMenu);
          };
      }, 300);

      toggledmenu = false;

    } else {
      navitems.classList.toggle("toggling");
      setTimeout(function()
        { navitems.style.opacity = 1;
      }, 150);

      for (i = 0; i < menuodkazy.length; i++) {
        menuodkazy[i].addEventListener("click", toggleMenu);
      };

      toggledmenu = true;

    }};
