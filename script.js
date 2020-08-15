console.log("it's working");

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i] = addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("option clicked", mode);
  });
}
