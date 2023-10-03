function displayImage(data) {

    for(var ind in data) {
        // slower method

        // create an img element && add properties to it using jquery
        // $('<img>', {
        //     src: data[ind].url,
        //     height: '100%',
        //     width: '100%'
        // }).appendTo('#image-container');

        // faster method

        var img = $(document.createElement('img'));
        img.attr({
            src: data[ind].url,
        });
        img.appendTo('#image-container');

        // can also write the entire thing in 1 line
    }

}

$.ajax({
    /* we can pass query parameters in the API only OR we can create a new key > data and via that 
    pass query paramters */
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success: displayImage, // register a cb && not calling it > called if server returns some data(which is already in JSON format)
    data: {
        // passing query params > appended to the api
        // for data range > it returns an array
        api_key : 'DEMO_KEY',
        // date: '2023-10-01'
        start_date: '2023-10-01',
        end_date: '2023-10-03'
    }
})