/**
 * Created by youngkim on 2015. 9. 7..
 */

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['introduction', 'news', 'instruction', 'campus', 'cooperation'],
        menu: '#menu',
        scrollingSpeed: 1000
    });

    registerEvent();
});

function registerEvent() {
    var studentBoxCheck = false,
        associationBoxCheck = false;

    //when click check box
    $('#studentBox').click(function () {
        studentBoxCheck = true;
        $('#studentBox').attr('src', '/images/check.png');
        if (associationBoxCheck) {
            associationBoxCheck = false;
            $('#associationBox').attr('src', '/images/uncheck.png');
        }
        $('#submitButton').text('오픈신청하기!');
    });

    $('#associationBox').click(function () {
        associationBoxCheck = true;
        $('#associationBox').attr('src', '/images/check.png');
        if (studentBoxCheck) {
            studentBoxCheck = false;
            $('#studentBox').attr('src', '/images/uncheck.png');
        }
        $('#submitButton').text('오픈신청하기!');
    });

    //when click submit button
    $('#submitButton').click(function () {
        var userCampus = '',
            userContact = '',
            userInvoice = '',
            userType = '';

        userCampus = $('#campusName').val();
        userContact = $('#contact').val();
        userInvoice = $('#invoice').val();

        if (studentBoxCheck) {
            userType = 'student';
        } else if (associationBoxCheck) {
            userType = 'association';
        }

        if (userCampus != '' && userContact != '' && userType != '') {
            sendOpenRequest(userCampus, userContact, userInvoice, userType);
        } else if (userType === '' && (userCampus != '' && userContact != '' )) {
            $('#submitButton').text('신청 종류를 체크해주세요!');
        }
    });
}

function sendOpenRequest(userCampus, userContact, userInvoice, userType) {
    $.ajax({
        type: 'POST',
        async: true,
        url: '/open_request',
        data: {
            userCampus: userCampus,
            userContact: userContact,
            userInvoice: userInvoice,
            userType: userType
        }
    }).done(function (data) {
        $('#submitButton').text('완료되었습니다!');
    }).fail(function () {
        $('#submitButton').text('에러에요! 다시해주세요!');
    });
}