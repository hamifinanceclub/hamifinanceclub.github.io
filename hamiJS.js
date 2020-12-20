function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = x.className.substr(0,6);
  }
  var a = document.getElementById("myDrop");
  if (a.className === "dropdown") {
    a.className += " responsive";
  } else {
    a.className = a.className.substr(0,8);
  }
}