/**
 * Created by rohit on 13/2/16.
 */
var _apiBaseUrl = 'http://192.168.1.85:3000/';
var _userDetails = {};
var _currPageName = "";
var _windowHeight = $(window).height();

$(document).ready(function () {
    $(".button-collapse").sideNav();
    console.log("ready");

    $('#loginForm')
        .ajaxForm({
            url : _apiBaseUrl + 'login',
            type: 'post',
            success : function (response) {
                console.log(response);
                _userDetails = response.user;
            }
        });
    $('#registerForm').attr('action', _apiBaseUrl + 'register');
    $('#addExpenseForm').attr('action', _apiBaseUrl + 'transaction/new');
});


document.addEventListener("deviceready", onDeviceReady, false);
