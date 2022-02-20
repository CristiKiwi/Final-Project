const toggle = document.getElementById("toggle1");
const mobileNavMenu = document.getElementById("mobileNavMenu");
const linksCollection = document.getElementsByClassName("link1");

toggle.addEventListener("change", (e) => {
  //toggle navbar mobile
  mobileNavMenu.style.height = e.target.checked ? "90vh" : 0;

  // toggle navbar links
  [...linksCollection].map((link) => {
    link.style.display = e.target.checked ? "block" : "none";
  });
});
