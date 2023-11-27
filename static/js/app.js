// // AOS
// AOS.init({
//   duration: 700,
//   easing: "ease",
//   once: true,
//   disable: "mobile",
// });

// const prev = document.querySelector(
//   ".instructor-carousel .owl-nav .owl-next span"
// );
// console.log(prev);

document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  const prev = document.querySelector(
    ".instructor-carousel .owl-nav .owl-prev span"
  );
  const next = document.querySelector(
    ".instructor-carousel .owl-nav .owl-next span"
  );
  prev.innerHTML = `<i class="far fa-long-arrow-left"></i>`;
  next.innerHTML = `<i class="far fa-long-arrow-right"></i>`;
});
