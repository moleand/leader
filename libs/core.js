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


                setTimeout(() => {
                    $('#feedback_submit')[0].innerText = 'Отправить сообщение';
                    $('#feedback_name')[0].value = '';
                    mask.unmaskedValue = '';
                    $('#feedback_info')[0].value = '';
                }, 3000)
            })
            .catch(err => {
                $('#feedback_submit')[0].innerText = 'Произошла ошибка, попробуйте позже!';
                setTimeout(() => {
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

function loadWrap() {
    var b = $("#wrap_button");
    var l = document.querySelectorAll(".collapsable");

    b.click(function () {
        for (let i = 0; i < l.length; i++) {
            const elem = l[i];
            if (elem.classList.contains('hidden')) {
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
        if (elem.classList.contains('hidden')) {
            elem.classList.add('hidden');
            elem.style.display = "none";
        }
    }
};

$(function () {
    var bb = $("#burger_button");
    var bb_outer = $("#bb_outer");
    var bb_inner = $("#bb_inner");

    bb.click(function () {
        var act = bb_outer.hasClass("is-hidden-touch");
        if (act) {
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

function loadRadio() {
    var ch1 = $("#choice1");
    var ch2 = $("#choice2");
    var img = $("#choice_img");

    ch1.click(function () {
        img.prop("src", "assets/image/uzel.svg");
    });
    ch2.click(function () {
        img.prop("src", "assets/image/peremychka.svg");
    })
}

function loadLinks() {
    var l_1 = $("#links_tech");
    var l_2 = $("#links_parameters");
    var l_3 = $("#links_types");
    var l_4 = $("#links_solutions");
    l_1.click(function () {
        document.location.href = "https://zkbi-lider.ru/about";
        return false;
    });
    l_2.click(function () {
        document.location.href = "https://zkbi-lider.ru/#parameters";
        return false;
    });
    l_3.click(function () {
        document.location.href = "https://zkbi-lider.ru/#types";
        return false;
    });
    l_4.click(function () {
        document.location.href = "https://zkbi-lider.ru/#solutions";
        return false;
    });
    loadAdditionalLinks();
}

function loadAdditionalLinks() {
    var l_1 = $("#links_tech_bottom");
    var l_2 = $("#links_parameters_bottom");
    var l_3 = $("#links_types_bottom");
    var l_4 = $("#links_solutions_bottom");
    l_1.click(function () {
        document.location.href = "https://zkbi-lider.ru/about";
        return false;
    });
    l_2.click(function () {
        document.location.href = "https://zkbi-lider.ru/#parameters";
        return false;
    });
    l_3.click(function () {
        document.location.href = "https://zkbi-lider.ru/#types";
        return false;
    });
    l_4.click(function () {
        document.location.href = "https://zkbi-lider.ru/#solutions";
        return false;
    });
}
