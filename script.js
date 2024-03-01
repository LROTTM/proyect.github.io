var swiper = new Swiper(".mySwiper", {
    slidesPerViw: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween: 30,
    grabCursos:true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    breackpoints : {
        991: {
            slidesPerView: 3
        }
    }

})