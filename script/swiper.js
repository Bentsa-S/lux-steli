let swiperScrollbarAry = [],
  swiperChoiceAry = []

let sensor = 0;

const swiper = new Swiper('.swiper',
{
  direction: 'horizontal',
  loop: true, 
  effect: 'cards',

  autoplay: {
      delay: 40000
  },
})


document.querySelectorAll('.swiper-scrollbar').forEach((a)=>{
  swiperScrollbarAry[sensor] = new Swiper(`#scrollbar-2`, {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  sensor++
  console.log(swiperScrollbarAry[sensor]);
})

sensor = 0;

console.log(swiperScrollbarAry);
document.querySelectorAll('.swiper-choice').forEach((a)=>{
swiperChoiceAry[sensor] = new Swiper(`#${a.id}`, 
{
  effect: "creative",
  loop: true, 

  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  thumbs: {
    swiper: swiperScrollbarAry[sensor],
  },
  
})
sensor++

console.log(swiperScrollbarAry[sensor]);

})

const swiperReviews = new Swiper('.swiper-reviews',
{
  slidesPerVievs: 3,
  spaceBetween: 58,
  direction: 'horizontal',
  loop: false,
  effect: 'slider',
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});