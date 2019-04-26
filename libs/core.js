var feedback_phone = $('#feedback_phone')[0];
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = new IMask(feedback_phone, maskOptions);
$(document).ready(function () {
    $('#feedback_submit').click(function () {
        let body = {
            name: $('#feedback_name')[0].value,
            phone: $('#feedback_phone')[0].value,
            info: $('#feedback_info')[0].value,
            request_key: 'nhbnjy'
        };
        $('#feedback_submit').attr('disabled', true);
        $('#feedback_info').attr('disabled', true);
        $('#feedback_name').attr('disabled', true);
        $('#feedback_phone').attr('disabled', true);

        axios.post('https://zkbi-lider.ru/api/order/mail', body)
            .then(res => {
                $('#feedback_submit')[0].innerText = 'Сообщение успешно отправлено!';


                setTimeout(()=>{
                    $('#feedback_submit')[0].innerText = 'Отправить сообщение';
                    $('#feedback_name')[0].value = '';
                    mask.unmaskedValue = '';
                    $('#feedback_info')[0].value = '';
                }, 3000)
            })
            .catch(err => {
                $('#feedback_submit')[0].innerText = 'Произошла ошибка, попробуйте позже!';
                setTimeout(()=>{
                    $('#feedback_submit')[0].innerText = 'Отправить сообщение';
                }, 3000)
            })
            .finally(() => {
                $('#feedback_submit').attr('disabled', false);
                $('#feedback_info').attr('disabled', false);
                $('#feedback_name').attr('disabled', false);
                $('#feedback_phone').attr('disabled', false);
            })
    });
    setInterval(checkForm, 500);

});



function checkForm() {
    if (mask.unmaskedValue.length < 11 || $('#feedback_name')[0].value.length < 2 || $('#feedback_info')[0].value.length < 1) {
        $('#feedback_submit').attr('disabled', true);
    } else {
        $('#feedback_submit').attr('disabled', false);
    }
}

$(function() {
    var b = $("#wrap_button");
    var l = document.querySelectorAll(".collapsable");

    b.click(function() {
        for (let i = 0; i < l.length; i++) {
            const elem = l[i];
            if(elem.classList.contains('hidden')){
                elem.classList.remove('hidden');
                elem.style.display = "";
            } else {
                elem.classList.add('hidden');
                elem.style.display = "none";
                $('html, body').animate({
                    scrollTop: $('#params_list').offset().top
                }, 100);
            }
        }
    });


    for (let i = 0; i < l.length; i++) {
        const elem = l[i];
        if(elem.classList.contains('hidden')){
            elem.classList.add('hidden');
            elem.style.display = "none";
        }
    }
});

$(function () {
    var bb = $("#burger_button");
    var bb_outer = $("#bb_outer");
    var bb_inner = $("#bb_inner");

    bb.click(function () {
        var act = bb_outer.hasClass("is-hidden-touch");
        if(act){
            bb_outer.removeClass("is-hidden-touch");
            bb_inner.addClass("is-active");
            bb.addClass("is-active");
        } else {
            bb_outer.addClass("is-hidden-touch");
            bb_inner.removeClass("is-active");
            bb.removeClass("is-active");
        }
    })
});
