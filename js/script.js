  var btnkampane = document.getElementById("btnkampane");
  var btngrafika = document.getElementById("btngrafika");
  var btnweby = document.getElementById("btnweby");

  var textkampane = document.getElementsByClassName("kampane-t");
  var textweby = document.getElementsByClassName("weby-t");
  var textkampane = document.getElementsByClassName("kampane-t");
  var textgrafika = document.getElementsByClassName("grafika-t");
  var i;


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
