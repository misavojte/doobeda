  var btnkampane = document.getElementById("btnkampane");
  var btngrafika = document.getElementById("btngrafika");
  var btnweby = document.getElementById("btnweby");

  var textkampane = document.getElementsByClassName("kampane-t");
  var textweby = document.getElementsByClassName("weby-t");
  var textkampane = document.getElementsByClassName("kampane-t");
  var textgrafika = document.getElementsByClassName("grafika-t");
  var i;

  var navicon = document.getElementById("nav-icon3");
  var navitems = document.getElementById("nav-items");
  var menuodkazy = document.getElementsByClassName("menu-hrefs");
  var navbar = document.getElementById("navbar");
  var toggledmenu = false;

  var bubblebtns = document.getElementById("bubblebtns");
  var slider = document.getElementsByClassName("slider");
  var tymsec = document.getElementById("tym");



btnkampane.addEventListener("mouseover", function () {

  btngrafika.classList.remove("active-dot");
  btnweby.classList.remove("active-dot");
  for (i = 0; i < textkampane.length; i++) {
    textweby[i].classList.add("hidden");
    textgrafika[i].classList.add("hidden");
    textkampane[i].classList.remove("hidden");
    }

  document.documentElement.style.setProperty('--main-col', "#FF1654");

  btnkampane.classList.add("active-dot");

});

btnweby.addEventListener("mouseover", function () {

  btngrafika.classList.remove("active-dot");
  btnkampane.classList.remove("active-dot");
  for (i = 0; i < textkampane.length; i++) {
    textkampane[i].classList.add("hidden");
    textgrafika[i].classList.add("hidden");
    textweby[i].classList.remove("hidden");
    }
  document.documentElement.style.setProperty('--main-col', "#F49912");

  btnweby.classList.add("active-dot");

});

btngrafika.addEventListener("mouseover", function () {

  btnkampane.classList.remove("active-dot");
  btnweby.classList.remove("active-dot");
  for (i = 0; i < textkampane.length; i++) {
    textkampane[i].classList.add("hidden");
    textweby[i].classList.add("hidden");
    textgrafika[i].classList.remove("hidden");
    }

  document.documentElement.style.setProperty('--main-col', "#2492D8");

  btngrafika.classList.add("active-dot");

});




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




slider[0].addEventListener("scroll", offsetCont);

function offsetCont() {


  if (bubblebtns.offsetTop < tymsec.offsetTop) {

  } else {
    bubblebtns.style.position = "absolute";
  }

};
