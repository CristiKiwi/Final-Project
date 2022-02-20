// product slider/caroussel

let leftBtn = document.getElementById(`prevBtn`);
let rightBtn = document.getElementById(`nextBtn`);

const products1 = document.getElementById("products1");

leftBtn.addEventListener("click", (e) => {
  products1.scrollLeft -= 200;
});

rightBtn.addEventListener("click", (e) => {
  products1.scrollLeft += 200;
});

let leftBtn1 = document.getElementById("prevBtn1");
let rightBtn1 = document.getElementById("nextBtn1");

const products2 = document.getElementById("products2");

leftBtn1.addEventListener("click", (e) => {
  products2.scrollLeft -= 200;
});

rightBtn1.addEventListener("click", (e) => {
  products2.scrollLeft += 200;
});
