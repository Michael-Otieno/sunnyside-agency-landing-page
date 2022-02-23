function hamburger_menu() {
  var x = document.querySelector(".menu_links");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
hamburger_menu()