window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if(scrollTop >= 200){
            $('#section01').addClass('on');
        }

        if(scrollTop >= 655){
            $('#section02').addClass('on');
        }


        if(scrollTop >= 1370){
            $('#section03').addClass('on');
        }


        if(scrollTop >= 2433){
            $('#section04').addClass('on');
        }


        if(scrollTop >= 6080){
            $('#section05').addClass('on');
        }

        if(scrollTop >= 6880){
            $('#section06').addClass('on');
        }

        if(scrollTop >= 7800){
            $('#section07').addClass('on');
        }


        if(scrollTop >= 10100){
            $('#section08').addClass('on');
        }

        if(scrollTop >= 13000){
            $('#section09').addClass('on');
        }
        if(scrollTop >= 14700){
            $('#section10').addClass('on');
        }

        if(scrollTop >= 15830){
            $('#section11').addClass('on');
        }

        if(scrollTop >= 18300){
            $('#section12').addClass('on');
        }

        if(scrollTop >= 21000){
            $('#section13').addClass('on');
        }

        if(scrollTop >= 22890){
            $('#section14').addClass('on');
        }

        if(scrollTop >= 24850){
            $('#section15').addClass('on');
        }

        if(scrollTop >= 26000){
            $('#section16').addClass('on');
        }

   /*     if(scrollTop >= 10700){
            $('#section08 .target_box1').addClass('on');
        }
        if(scrollTop >= 10710){
            $('#section08 .target_box2').addClass('on');
        }

        if(scrollTop >= 10800){
            $('#section08 .chart').addClass('on');
        }

        if(scrollTop >= 12500){
            $('#section08 .dot').addClass('on');
        }


        if(scrollTop >= 12600){
            $('#section08 .cold2').addClass('on');
        }
*/





    });


    $('#section01').addClass('on');


    //
    // var swiper = new Swiper('.flow', {
    //     slidesPerView: 2,
    //     autoplay:true,
    //     autoplaySpeed: 10,
    //     centeredSlides: false,
    //     initialSlide:0,
    //     speed: 1000, //
    //     spaceBetween: 485,
    //     grabCursor: false,
    //     slidesOffsetBefore: 0,
    //     slidesOffsetAfter: 0,
    //     // scrollbar: {
    //     //     el: '#section07 .drag_bar .long',
    //     //     draggable: true,
    //     // },
    //
    // });
    //
    //
    // var swiper2 = new Swiper('.flow2', {
    //     slidesPerView: 3,
    //     autoplay:true,
    //     autoplaySpeed: 10,
    //     centeredSlides: false,
    //     infinite: true,
    //     speed: 1000, //
    //     spaceBetween: 850,
    //     grabCursor: false,
    //     slidesOffsetBefore: 100,
    //     slidesOffsetAfter: 0,
    //     // scrollbar: {
    //     //     el: '#section03 .drag_bar .long',
    //     //     draggable: true,
    //     // },
    //
    // });


})