$(document).ready(function () {
    $.ajax({
            method: "GET",
            url: _apiBaseUrl + 'getBalance/' + _userDetails.userNo
        })
        .done(function( response ) {
            $('#balanceID').val(response.balance);
        });
    $.ajax({
            method: "GET",
            url: _apiBaseUrl + 'transaction/all/' + _userDetails.userNo,
        })
        .done(function( response ) {
            $('#transactionID').html('');
            for each tran in response.transactions {
                $('#transactionID').append("<li class='collection-item avatar'> <span class='title'>" + tran.description "</span> <p>" + tran.type + "<br>" + tran.date +  "</p> <a class='secondary-content'>" + tran.amount + "</a>  </li>");
            }
        });
};