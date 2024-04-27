document.addEventListener("DOMContentLoaded", function () {
  const imageScroll = document.querySelector(".image-slider");
  const backBtn = document.querySelector("#back-btn");
  const nextBtn = document.getElementById("next-btn");
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white");
    }
  });

  imageScroll.addEventListener("wheel", (e) => {
    e.preventDefault();
    imageScroll.scrollLeft += e.deltaY;
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    imageScroll.style.scrollBehavior = "smooth";
    imageScroll.scrollLeft += 1050;
    console.log("Right Button clicked");
  });

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    imageScroll.style.scrollBehavior = "smooth";
    imageScroll.scrollLeft -= 1050;
    console.log("Back Button clicked");
  });
});
