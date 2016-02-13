/**
 * Created by rohit on 13/2/16.
 */
var _apiBaseUrl = 'http://192.168.0.1/';
var _userDetails = [];
var _currPageName = "";
var _windowHeight = $(window).height();

$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('#registerForm').attr('action', _apiBaseUrl + 'register');
    $('#loginForm').attr('action', _apiBaseUrl + 'login');
    $('#addExpenseForm').attr('action', _apiBaseUrl + 'login');
});


document.addEventListener("deviceready", onDeviceReady, false);
