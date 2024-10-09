let aboutOffeset = $('#about').offset().top
let navHigh = $('.navbar').outerHeight(true)

$(window).scroll(function(){
    let scrVal = $(window).scrollTop()
    if(scrVal > aboutOffeset - navHigh){
        $('.navbar').css('background-color', 'rgb(0,0,0,.7)')
    }
    else{
        $('.navbar').css('background-color', 'transparent')
    }
})