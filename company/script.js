$(window).on('load',function(){
    $('.mainvisual .text').delay(500).fadeIn(1000);
});
// loadの際のアニメーション



$(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        
        
        if(scroll > windowHeight - 150){
            $('header h1').css('transition','all 0.5s');  
            $('header').css('background-color','rgb(0, 0, 125)');  
        }else{
            $('header').css('background-color','transparent');
            $('header h1').css('transition','all 0.5s');  
        }


        // $('.box').each(function(){
        //     let target = $(this).offset().top;

        //     if(scroll > target - windowHeight + 100){
        //        $(this).addClass('fade-after');  //ここをthisにしないといっぺんにfade-afterが追加されてしまう
        //     }
        // });

        $('.vs-wrap').each(function(){
            let targetImg = $(this).offset().top;

            if(scroll > targetImg - windowHeight + 100){
               $(this).addClass('fade-bottom');  
            }
        });

        $('.back').each(function(){
            let targetImg = $(this).offset().top;

            if(scroll > targetImg - windowHeight + 100){
               $(this).addClass('fade-bottom');  
            }
        });

        $('.emp').each(function(){
            let targetImg = $(this).offset().top;

            if(scroll > targetImg - windowHeight + 100){
               $(this).addClass('fade-bottom');  
            }
        });

        $('.img-wrap').each(function(){
            let targetImg = $(this).offset().top;

            if(scroll > targetImg - windowHeight + 100){
               $(this).addClass('fade-bottom');  
            }
        });

    });


    $('.burger').on('click',function(){
        if($('.burger-nav').hasClass('open')){
            $('.burger-nav').removeClass('open');  
            $('.burger').removeClass('open-bg');
            $('.burger .menu').text('メニュー');
            
        }else{
            $('.burger-nav').addClass('open');
            $('.burger').addClass('open-bg');
            $('.burger .menu').text('閉じる');
            $('.burger .menu').css('left','8px');
        }

        $('.burger-nav a').on('click',function(){
            $('.burger-nav').removeClass('open'); 
            $('.burger').removeClass('open-bg');
            $('.burger .menu').text('メニュー');
        });
    });


    
});