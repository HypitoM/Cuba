$(function (){
    console.log("andrei_xui")
    $('.photo__slider').slick({
        slidesToShow: 1,
        arrows: false,
        prevArrow: '<button type = "button" class = "slick-prev" ><img src="images/arrow-left.svg" alt="">< /button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

});