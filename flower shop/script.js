$(function(){

$('.burger').on('click',function(){
    if($('nav').hasClass('open')){
        $('nav').removeClass('open');  /*thisではバーガーメニューが機能しない*/
        $('.burger').removeClass('open-bg'); /*バーガーの × を作るためのクラスを追加させる*/
    }else{
        $('nav').addClass('open');
        $('.burger').addClass('open-bg'); 
    }
});


$('nav').on('click',function(){
    /*navをクリックした時に、メニュが閉じ、三本線に戻す*/
    $('nav').removeClass('open')       
    $('.burger').removeClass('open-bg'); 
});


$('.burger').on('click',function(){
    console.log('circle');
    if($('.circle').hasClass('active')){
        $('.circle').removeClass('active');
    }else{
        $('.circle').addClass('active');
    }
});


/* アコーディオンメニュー*/
$('#information h4').on('click',function(){
    console.log('accordion');
    if($('.accordion').hasClass('down')){
        $('.accordion').removeClass('down');
        $('.accordion').slideUp();
        $('#information h4 span').text('+');
    }else{
        $('.accordion').addClass('down');
        $('.accordion').slideDown();
        $('#information h4 span').text('ー');
    }
});

// スクロール時のイベント
$(window).scroll(function(){
    let scroll = $(window).scrollTop(); /* スクロール位置の獲得*/
    

    /*スクロールが520px以上の時はheaderを表示*/
    if(scroll>520){
        $('header').fadeIn(500);  /* 0.5sで表示*/
    }else{
        $('header').fadeOut(500);
    }

    mainvisual_scale(scroll); /*メインビジュアルの関数を呼び出す*/

    /*　　メインビジュアルの拡大、縮小の関数　　*/
    function mainvisual_scale(scroll){
        if(window.innerWidth>900){
            $('.mainvisual img').css({
                'width': 100/3 + scroll/10 + '%'
            });
        }else{
            $('.mainvisual img').css({
                'width':100 - scroll/10 + '%'
            });
        }
    }

    /*　　galleryのフェードイン表示　　*/
    $('.item').each(function(){
        let target = $(this).offset().top;
        let windowHeight = $(window).height();

        if(scroll > target - windowHeight + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        } 
    });

    // 画面下からaccessまでの距離を獲得
    let access_position = $('#access').offset().top - $(window).height();
    // 画面下からcontactまでの距離を獲得
    let contact_position = $('#contact').offset().top - $(window).height();
    if(scroll > access_position){      //accessが表示されているとき
        if(scroll < contact_position){
            $('.bg').fadeIn(500);      //accessが表示され、かつ、contactが表示されていない
        }else{
            $('.bg').fadeOut(500);     //accessが表示され、かつ、contactが表示されている
        }
    }else{                             // accessが表示される前の場合
        $('.bg').fadeOut(500);
    }
});

});
