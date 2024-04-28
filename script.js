document.addEventListener("DOMContentLoaded", function () {
  const imageScroll = document.querySelector(".image-slider");
  const backBtn = document.querySelector("#back-btn");
  const nextBtn = document.getElementById("next-btn");
  const navbar = document.getElementById("navbar");

  // To appear navbar background color white after scroll of 700
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white");
    }
  });

  // To scroll image slider at y-axis
  imageScroll.addEventListener("wheel", (e) => {
    e.preventDefault();
    imageScroll.scrollLeft += e.deltaY;
  });

  // nextbtn handler for image slider to scroll at +1050 from current position
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    imageScroll.style.scrollBehavior = "smooth";
    imageScroll.scrollLeft += 1050;
    console.log("Right Button clicked");
  });

   // backbtn handler for image slider to scroll at -1050 from current position
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    imageScroll.style.scrollBehavior = "smooth";
    imageScroll.scrollLeft -= 1050;
    console.log("Back Button clicked");
  });
});
