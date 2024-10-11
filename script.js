"use strict";
const account1 = {
  owner: "Dusan Brankovic",
  pin: 1111,
  level: 5,
  grade: 7,
};
const account2 = {
  owner: "Bojan Jovicic",
  pin: 2222,
  level: 5,
  grade: 8,
};

//SLIDER
//////////////////////////////////////////////////////////////////////////////
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const dotContainer = document.querySelector(".dots");
//   let curSlide = 0;
//   const maxSlide = slides.length;

//   //functions

//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const actiateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));
//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // //Sledeci slajd
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide);
//     actiateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     actiateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();
//     actiateDot(0);
//   };

//   init();

//   //Event handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       actiateDot(slide);
//     }
//   });
// };
// slider();

//Nav line in sections
/////////////////////////////////////////////////////////////////////////
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///// uvecaj sliku
// const uvecajSliku =  function (s) {
//   s.target.classList.remove('lazy-img')
//   s.target.previousElementSibling.classList.remove('hiddentxt')
//   // s.target.src.replace('Bblur.', 'B.')
//   // console.log(s.target.src);
// }

// ///// smanji sliku
const smanjiSliku = function (s) {
  s.target.classList.add("lazy-img");
  s.target.previousElementSibling.classList.add("hiddentxt");
};

const loadImg = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
      // entry.target.previousElementSibling.classList.remove('hiddentxt')
    });
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});
const treninziSlika = document.querySelectorAll(".lazy-img");

treninziSlika.forEach((img) => imgObserver.observe(img));
// const enlargeImg = function (s) {
//   const put = s.target.getAttribute("data-src").replace('B', '');
//   s.target.src = `${put}`
//   s.target.scale = 2
//   console.log(put);
// };
// treninziSlika.forEach((slika) =>
//   slika.addEventListener("mouseover", enlargeImg)
// );
// treninziSlika.forEach(slika => slika.addEventListener('mouseout', smanjiSliku))

///// drvce to the top
// const toTheTop = function () {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// drvoLogo.addEventListener('click', toTheTop)
// drvoLogoFooter.addEventListener('click', toTheTop)

let str = "obukeBblur.jog";
console.log(str.replace("Bblur.", "B."));

const showMoreText = document.querySelectorAll(".showText");
const showLessText = document.querySelectorAll(".hideText");
const hiddenText = document.querySelectorAll(".hiddenText");
const showText = function(){
showMoreText.forEach((el, i)=> {
  el.addEventListener('click', ()=> {
    hiddenText[i].classList.toggle("hiddenText");
    showMoreText[i].classList.toggle("hiddenText");
  })
})
showLessText.forEach((el, i)=> {
  el.addEventListener('click', ()=> {
    hiddenText[i].classList.toggle("hiddenText");
    showMoreText[i].classList.toggle("hiddenText");
  })
})

}
showText()