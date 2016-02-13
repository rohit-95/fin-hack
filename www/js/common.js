/**
 * Created by kalsi on 13/2/16.
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
                $(location).attr('href','home.html');
            }
        });
    $('#registerForm')
        .ajaxForm({
                url : _apiBaseUrl + 'register',
                type: 'post',
                success : function(response) {
                    console.log(response);
                }
            }
        );
    $('#addExpenseForm')
        .ajaxForm({
                url : _apiBaseUrl + 'addExpense',
                type: 'post',
                success : function(response) {
                    console.log(response);
                }
            }
        );
    $('#addDepositForm')
        .ajaxForm({
            url : _apiBaseUrl + 'addDeposit',
            type: 'post',
            success : function(response) {
                console.log(response);
            }
        }
        );
});


document.addEventListener("deviceready", onDeviceReady, false);
