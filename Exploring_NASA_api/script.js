function displayImage() {
    
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method: 'GET',
    success: displayImage
})