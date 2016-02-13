/**
 * Created by kalsi on 13/2/16.
 */
var _apiBaseUrl = 'http://192.168.1.85:3000/';
var _userDetails = {};
var _currPageName = "";
var _windowHeight = $(window).height();

if(localStorage.getItem('_userDetails')){
    _userDetails=localStorage.getItem('_userDetails');
    console.log(_userDetails);
}

$(document).ready(function () {
    var input = $("<input>")
        .attr("type", "hidden");

    $(".button-collapse").sideNav();
    console.log("ready");

    $('#loginForm')
        .ajaxForm({
            url : _apiBaseUrl + 'login',
            type: 'post',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success : function (response) {
                console.log(response.user);
                _userDetails = response.user;
                localStorage.setItem('_userDetails', _userDetails);
                $(input).val(_userDetails.userNo);
                $(location).attr('href',"home.html")
            }
        });
    $('#registerForm')
        .ajaxForm({
                url : _apiBaseUrl + 'register',
                type: 'post',
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success : function(response) {
                    console.log(response);
                    $(location).attr('href',"incomeFlow.html")
                }
            }
        );
    $('#addExpenseForm')
        .append($(input));
    $('#addExpenseForm')
        .ajaxForm({
                url : _apiBaseUrl + 'transaction/new',
                type: 'post',
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success : function(response) {
                    console.log(response);
                    $(location).attr('href',"home.html")
                }
            }
        );
    $('#addDepositForm')
        .append($(input));
    $('#addDepositForm')
        .ajaxForm({
            url : _apiBaseUrl + 'transaction/new',
            type: 'post',
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success : function(response) {
                console.log(response);
                $(location).attr('href','home.html')
            }
        }
        );
    $('#incomeFlow')
        .append($(input));
    $('#incomeFlow')
        .ajaxForm({
                url : _apiBaseUrl + 'start',
                type: 'post',
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success : function(response) {
                    console.log(response);
                    $(location).attr('href',"home.html")
                }
            }
        );
});


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady () {

    /**
     * This callback will be executed every time a geolocation is recorded in the background.
     */
    var callbackFn = function(location) {
        console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);

        // Do your HTTP request here to POST location to your server.
        jQuery.post(_apiBaseUrl + 'update', JSON.stringify(location));

        /*
         IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
         and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
         IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
         */
        backgroundGeoLocation.finish();
    };

    var failureFn = function(error) {
        console.log('BackgroundGeoLocation error');
    };

    // BackgroundGeoLocation is highly configurable. See platform specific configuration options
    backgroundGeoLocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates
        interval: 30000
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    backgroundGeoLocation.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // backgroundGeoLocation.stop();
}