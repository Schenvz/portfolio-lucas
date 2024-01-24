function toggleDarkMode() {
  const jumbotron = document.querySelector("#jumbotronindex1");
  const background = jumbotron.querySelector(".bg-body-tertiary");

  if (background.style.backgroundColor === "rgb(220, 220, 220)") {
    background.style.backgroundColor = "black";
  } else {
    background.style.backgroundColor = "rgb(220, 220, 220)";
  }
}
