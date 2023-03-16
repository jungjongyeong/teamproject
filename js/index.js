(function ($) {

    // article4 구역의 돋보기 클릭하면 이미지를 모달창에서 크게 보기
    // $('.articleModal ul li p').each(function(){
    //     let text = $(this).text()
    //     let newText = text.substr(0, 40)
    //     if ( text.length>=40 ) {
    //         $(this).text(newText+'...')
    //     } else {  
    //         let count = 40 - text.length
    //         for ( let i=0; i<count; i++ ) { text += "&nbsp; " }
    //         $(this).html(text)
    //     }
    // })

    // $('.articleModal ul li .sect1 a').on('click', function(){

    //     $('body').append(`<div class="modal"></div>`)
    //     $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
    //     $('.imgbox').prepend(`<a>section1</a>`)
    //     $('.imgbox a').after(`<button type="button">닫기</button>`)

    //     return false
    // })
    // $('.articleModal ul li .sect2 a').on('click', function(){

    //     $('body').append(`<div class="modal"></div>`)
    //     $('.modal').prepend(`<div class="imgbox twoModal"></div>`)
    //     $('.imgbox').prepend(`<a>section2</a>`)
    //     $('.imgbox a').after(`<button type="button">닫기</button>`)

    //     return false
    // })
    // $('.articleModal ul li .sect3 a').on('click', function(){

    //     $('body').append(`<div class="modal"></div>`)
    //     $('.modal').prepend(`<div class="imgbox threeModal"></div>`)
    //     $('.imgbox').prepend(`<a>section3</a>`)
    //     $('.imgbox a').after(`<button type="button">닫기</button>`)


    //     return false
    // })


    // 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
    $('body').on('click', '.modal button', function () {
        $('.modal').remove()
    })

    // 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기   
    $('body').on('click', '.back_form', function (e) {
        $('.modal').remove()
    })

})(jQuery);