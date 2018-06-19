$(document).on('click', '#submit', function () {
    calculation();
})

function calculation() {
    var a = parseInt($('#charge_one').val().trim());
    var a_type = parseFloat($('#type_one').val());
    var c = parseInt(Math.pow($("#distance").val().trim(), 2));
    var answer = parseFloat((9988000000 * ((a * a_type) / c * 0.04)));
    var roundedAnswer = Math.round(answer * 10) / 10;
    $('#answer').text(roundedAnswer + ' n');
    if($('#answer').text() != "NaN n"){
        animation();
    } else {
        $('.card').removeClass('fadeInUp').addClass('shake')
        $("#submit").prop('disabled', true)
        setTimeout(function () {
            $("#submit").prop('disabled', false)
            $('.card').removeClass('shake')
        }, 1000)
    }
}

function animation(){
    $('#inputs').fadeOut(200);
    $("#result div").animate({
        top: '60%',
        opacity: '1',
    }, 1000);
}

function return_animation(){
    $("#result div").animate({
        top: '100%',
        opacity: '0',
    }, 200);
    $('#inputs').fadeIn(800);
}

$(document).on('keydown', '#charge_one, #charge_two, #distance', function (e) {
    if(e.keyCode == 13){
        if($('#charge_one').val().trim() != '' && $('#charge_two').val().trim() != '' && $('#distance').val().trim() != ''){
            calculation();
        }
    }
})

$(document).on('click', '#back', function () {
    $('#charge_one').val('');
    $('#charge_two').val('');
    $("#distance").val('');
    $('.selectpicker').selectpicker('val', '');
    $('#charge_one, #charge_two, #distance').parent().removeClass('is-filled')
    return_animation();
})