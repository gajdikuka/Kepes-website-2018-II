$(function () {
       $(window).scroll(function () {
           if ($(this).scrollTop() >= 0&& $(this).scrollTop() <= $(window).height()*0.6) {
              $(".scroll").css("background", "#174895");
           }
          else if ($(this).scrollTop() >= $(window).height()*0.5 && $(this).scrollTop() <= $(window).height()*1.6) {
             $(".scroll").css("background", "#72c7a4");
          }
          else if ($(this).scrollTop() >= $(window).height()*1.6 && $(this).scrollTop() <= $(window).height()*3) {
             $(".scroll").css("background", "#174895");
          }
          else if ($(this).scrollTop() >= window.innerHeight*3) {
             $(".scroll").css("background", "#72c7a4");
          }
      });
});
