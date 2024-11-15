const leftMenuWidth = $('.leftMenu').innerWidth();
$('.closeMenu').click(function(){
    $('.sideNav').animate({left: -leftMenuWidth+"px"}, 500)
    $('.home-content').animate({marginLeft: "0px"}, 500)        
})
$('.openMenu').click(function(){
    $('.sideNav').animate({left: "0px"}, 500) 
    $('.home-content').animate({marginLeft: leftMenuWidth+"px"}, 500)
})


$("#singers h3").click(function(){
    $('#singers div').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})


window.onload = function () {
    remainingTime('10 october 2025 11:59:00');
}
function remainingTime(counter) {
    let countDate = new Date(counter);
    countDate = (countDate.getTime() / 1000);
    let day = new Date();
    day = (day.getTime() / 1000);
    let timeDifference = (countDate - day);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let minutes = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (minutes * 60)));

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $('.seconds').html(`${seconds} s`);

    setInterval(function () {
        remainingTime(counter);
    }, 1000);
}


var maxNumber = 100;
$('textarea').keyup(function(e) {
    let lengthOfNumber = $(this).val().length;
    let remainingNumber = maxNumber - lengthOfNumber;
    if (remainingNumber <= 0) {
        $('.number').text('your available character finished');
        $('.remainingNumber').text('');
        e.preventDefault();
    }
    else {
        $('.number').text(remainingNumber);
    }
})


