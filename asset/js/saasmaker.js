 var swiper = new Swiper(".mySwiper", {
        speed: 1200,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('nav').classList.add('header-scroll', 'shadow');
  } else {
    document.querySelector('nav').classList.remove('header-scroll', 'shadow');
  }
}


var swiper = new Swiper(".team-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//탭 스크립트
// const tabList = document.querySelectorAll('.tab_menu .list li');
  
// for(var i = 0; i < tabList.length; i++){
//   tabList[i].querySelector('.btn-tab').addEventListener('click', function(e){
//     e.preventDefault();
//     for(var j = 0; j < tabList.length; j++){
//       tabList[j].classList.remove('is_on');
//     }
//     this.parentNode.classList.add('is_on');
//   });
// }