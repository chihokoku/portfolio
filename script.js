$(function () {
  $(".slider")
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
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
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    })
    .on({
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      afterChange: function () {
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });

  $(".burger").on("click", function () {
    if ($(".burger-nav").hasClass("open")) {
      $(".burger-nav").removeClass("open");
      $(".circle").removeClass("active");
      // open-bg=バーガーを×にするクラス
      $(".burger").removeClass("open-bg");
    } else {
      $(".burger-nav").addClass("open");
      $(".circle").addClass("active");
      $(".burger").addClass("open-bg");
    }
  });

  // バーガー内のナビメニューを押した際のアニメーション
  $(".burger-nav a").on("click", function () {
    $(".burger-nav").removeClass("open");
    $(".circle").removeClass("active");
    $(".burger").removeClass("open-bg"); //ここを追記した
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let targetFooter = $("#footer").offset().top;

    // headerの色が変わるアニメーション
    if (scroll > windowHeight) {
      $("header").css("transition", "all 0.5s");
      $("header").css("background-color", "black");
    } else {
      $("header").css("background-color", "transparent");
    }

    // topに戻るためのボタン
    if (scroll > targetFooter - windowHeight + 100) {
      $(".top").css("display", "block");
      $(".scrolldown").css("display", "none");
    } else {
      $(".top").css("display", "none");
      $(".scrolldown").css("display", "block");
    }
  });

  // worksのアニメーション
  $(window).scroll(function () {
    $(".box").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
