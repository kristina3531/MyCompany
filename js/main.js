window.onload = function() {

  let headerMenuLink = [...document.getElementsByClassName("header-menu__link")];
  for(let i = 0; i < headerMenuLink.length; i++) {
    headerMenuLink[i].addEventListener("click", function() {
      headerMenuLink.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  }

  let burger = document.getElementById("burger");
  burger.onclick = function() {
    this.classList.toggle("opened");
    document.getElementById("menu").classList.toggle("show");
  }
  
}
