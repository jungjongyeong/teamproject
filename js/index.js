(function ($) {

    setTimeout(function () {
        $(".introClone").fadeOut(1000);
    }, 8000);

    // 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
    $('body').on('click', '.button', function () {
        $('.modal1').css('opacity', '0')
        $('.modal1').css('z-index', '0')
        $('.modal2').css('opacity', '0')
        $('.modal2').css('z-index', '0')
        $('.modal3').css('opacity', '0')
        $('.modal3').css('z-index', '0')
        $('.modal4').css('opacity', '0')
        $('.modal4').css('z-index', '0')
    })

    // 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기   
    $('body').on('click', '.back_form', function (e) {
        $('.modal').remove()
    })


})(jQuery);