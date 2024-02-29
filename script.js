// ローティングページのアニメーション
$(window).on('load', function () {
  var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#bbb',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定       
      style: {//天地中央に配置
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',//バーより上に配置
        transform: 'translate(-50%,-50%)',
        'font-size': '1rem',
        color: '#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });

  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
  });
});




$(function () {
  $('.slider')
    .on('init', function () {
      $('.slick-slide[data-slick-index="0"]').addClass('add-animation');
    })
    .slick({
      fade: true,
      arrows: false,
      autoplay: true,
      autosSeed: 4000,
      speed: 2000,
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
      dots: true,
      pauseOnFoucs: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    })
    .on({
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide', this).eq(nextSlide).addClass("add-animation");
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      afterChange: function () {
        $(".remove-animation", this).removeClass("remove-animation add-animation");
      }
    });



  $('.burger').on('click', function () {
    if ($('.burger-nav').hasClass('open')) {
      $('.burger-nav').removeClass('open');
      $('.circle').removeClass('active');
      // open-bg=バーガーを×にするクラス
      $('.burger').removeClass('open-bg');
    } else {
      $('.burger-nav').addClass('open');
      $('.circle').addClass('active');
      $('.burger').addClass('open-bg');
    }
  });


  // バーガー内のナビメニューを押した際のアニメーション
  $('.burger-nav a').on('click', function () {
    $('.burger-nav').removeClass('open');
    $('.circle').removeClass('active');
    $('.burger').removeClass('open-bg');  //ここを追記した
  });



  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let targetFooter = $('#footer').offset().top;

    // headerの色が変わるアニメーション
    if (scroll > windowHeight) {
      $('header').css('transition', 'all 0.5s');
      $('header').css('background-color', 'rgb(92, 92, 92)');
    } else {
      $('header').css('background-color', 'transparent')
    }

    // topに戻るためのボタン
    if (scroll > targetFooter - windowHeight + 100) {
      $('.top').css('display', 'block');
      $('.scrolldown').css('display', 'none');
    } else {
      $('.top').css('display', 'none');
      $('.scrolldown').css('display', 'block');
    }
  });


  // worksのアニメーション
  $(window).scroll(function () {
    $('.box').each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 100) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)')
      }
    });
  });

});