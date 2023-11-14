var title = document.querySelector("h1");
var darkModeButton = document.querySelector(".dark-mode");
/*var body = document.querySelector("body"); */
/*var lightModeButton = document.querySelector(".light-mode"); */
//here it gets tricky//
var theme = document.querySelector("body");

title.addEventListener("mouseover", function () {
  title.innerText = "Lets PARTY !";
  title.style.color = "maroon";
});

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});

/*lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});*/
