/**
 * Created by youngkim on 2015. 9. 7..
 */

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['introduction', 'news', 'campus', 'cooperation'],
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
            userType = '';

        userCampus = $('#campusName').val();
        userContact = $('#contact').val();

        if (studentBoxCheck) {
            userType = 'student';
        } else if (associationBoxCheck) {
            userType = 'association';
        }

        if (userCampus != '' && userContact != '' && userType != '') {
            sendOpenRequest(userCampus, userContact, userType);
        } else if (userType === '' && (userCampus != '' && userContact != '')) {
            $('#submitButton').text('신청 종류를 체크해주세요!');
        }
    });
}

function sendOpenRequest(userCampus, userContact, userType) {

}