function fetchRandomDogImage() {
    // object created
    var xhrRequest = new XMLHttpRequest();

    // open the request
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true); 
    /* method, link, true(if you want this req to be asynchronous) */
    
    // make the request to the server
    xhrRequest.send();

    // once response is received from server, xhrRequest.onload() is called
    xhrRequest.onload = function() {
        console.log(xhrRequest.response);
        /* xhrRequest.response is a string > so convert to JSON > to access the property containing the Image URL */
    
        var responseJSON = JSON.parse(xhrRequest.response);
        /* similary > JSON.stringify() > convert JSON to string */
    
        var imageURL = responseJSON.message; // message is key name of JSON
    
        $('#dog-image').attr('src', imageURL);
    }
    // error handling
    xhrRequest.onerror = function() {
        console.log("Request Failed");
    }

    // sending request using AJAX > method 1

    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data) {
            // data received from server is already in JSON format
            var imageURL = data.message;
            $('#dog-image').attr('src', imageURL);
        }
    }).fail(function() {
        console.log('error');
    })

    // method 2

    $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        var imageURL = data.message;
        $('#dog-image').attr('src', imageURL);
    }).fail(function(xhr, textStatus, errorThrown) {
        console.log('Request Failed');
    })
}


$('#fetch-dog-image-button').click(fetchRandomDogImage);