  var btnkampane = document.getElementById("btnkampane");
  var btngrafika = document.getElementById("btngrafika");
  var btnweby = document.getElementById("btnweby");

  var textkampane = document.getElementsByClassName("kampane-t");
  var textweby = document.getElementsByClassName("weby-t");
  var textgrafika = document.getElementsByClassName("grafika-t");
  var obrkampane = document.getElementsByClassName("kampane-o");
  var obrweby = document.getElementsByClassName("weby-o");
  var obrgrafika = document.getElementsByClassName("grafika-o");
  var bobrkampane = document.getElementById("ic-ph-kampane");
  var bobrweby = document.getElementById("ic-ph-weby");
  var bobrgrafika = document.getElementById("ic-ph-grafika");
  var btexkampane = document.getElementById("ic-te-kampane");
  var btexweby = document.getElementById("ic-te-weby");
  var btexgrafika = document.getElementById("ic-te-grafika");

  var i;
  var activeTopic = 1; //1 pro grafiku, 2 pro weby, 3 pro kampane
  var notfadingOut = true;
  var bubblesinteracted = false;

  var navicon = document.getElementById("nav-icon3");
  var navitems = document.getElementById("nav-items");
  var menuodkazy = document.getElementsByClassName("menu-hrefs");
  var navbar = document.getElementById("myHeader");
  var toggledmenu = false;

btnkampane.addEventListener("mouseover", function() {
  kamAniStart(false);
});
btnweby.addEventListener("mouseenter", function() {
  webyAniStart(false);
});
btngrafika.addEventListener("mouseenter", function() {
  grafiAniStart(false);
});

autoBubbleInteraction();

function autoBubbleInteraction() {
    setTimeout(function() {
      if (!bubblesinteracted) {
        webyAniStart(true);
        setTimeout(function() {
          if (!bubblesinteracted) {
            grafiAniStart(true);
            setTimeout(function() {
              if (!bubblesinteracted) {
                kamAniStart(true);
              }
            }, 3000);
          }
        }, 3000);
      }
    }, 3000);
}

function kamAniStart(autotrigger) {
  if (activeTopic != 1 && notfadingOut) {

    activeTopic = 1;
    notfadingOut = false;

    if (!autotrigger) {
      bubblesinteracted = true;
    };

    btngrafika.classList.remove("active-dot");
    btnweby.classList.remove("active-dot");

    bobrgrafika.classList.add("tra0");
    bobrweby.classList.add("tra0");
    bobrkampane.classList.remove("tra0");

    btexgrafika.classList.remove("tra0");
    btexweby.classList.remove("tra0");
    btexkampane.classList.add("tra0");

    document.documentElement.style.setProperty('--main-col', "#FF1654");

    btnkampane.classList.add("active-dot");

    slideOutTextAnim();

    setTimeout(function() {
      changeTextAnim();
    }, 300);
  }
}

function webyAniStart(autotrigger) {
  if (activeTopic != 2 && notfadingOut) {

    activeTopic = 2;
    notfadingOut = false;

    if (!autotrigger) {
      bubblesinteracted = true;
    };

    btngrafika.classList.remove("active-dot");
    btnkampane.classList.remove("active-dot");

    bobrgrafika.classList.add("tra0");
    bobrweby.classList.remove("tra0");
    bobrkampane.classList.add("tra0");

    btexgrafika.classList.remove("tra0");
    btexweby.classList.add("tra0");
    btexkampane.classList.remove("tra0");

    document.documentElement.style.setProperty('--main-col', "#F49912");

    btnweby.classList.add("active-dot");

    slideOutTextAnim();

    setTimeout(function() {
      changeTextAnim();
    }, 300);
  }
}

function grafiAniStart(autotrigger) {
  if (activeTopic != 3 && notfadingOut) {
    activeTopic = 3;
    notfadingOut = false;

    if (!autotrigger) {
      bubblesinteracted = true;
    };

    btnkampane.classList.remove("active-dot");
    btnweby.classList.remove("active-dot");

    bobrgrafika.classList.remove("tra0");
    bobrweby.classList.add("tra0");
    bobrkampane.classList.add("tra0");

    btexgrafika.classList.add("tra0");
    btexweby.classList.remove("tra0");
    btexkampane.classList.remove("tra0");

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
  } else if (activeTopic == 3) {
    for (var i = 0; i < textkampane.length; i++) {
      textgrafika[i].classList.remove("hidden");
    };
    for (var i = 0; i < obrkampane.length; i++) {
      obrgrafika[i].classList.remove("hidden");
    };
  } else {
    for (var i = 0; i < textkampane.length; i++) {
      textweby[i].classList.remove("hidden");
    };
    for (var i = 0; i < obrkampane.length; i++) {
      obrweby[i].classList.remove("hidden");
    };
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
    } else if (activeTopic == 3) {
      for (var i = 0; i < textkampane.length; i++) {
        textgrafika[i].classList.remove("tra");
      };
      for (var i = 0; i < obrkampane.length; i++) {
        obrgrafika[i].classList.remove("tra2");
      };
    } else {
      for (var i = 0; i < textkampane.length; i++) {
        textweby[i].classList.remove("tra");
      };
      for (var i = 0; i < obrkampane.length; i++) {
        obrweby[i].classList.remove("tra2");
      };
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
