// for modifying CSS using Jquery
$('#para1').css('color', 'red');
$('#para1').css('fontSize', '30px');

// applying multiple properties all at once > pass an object(key-value pair) to css function

$('p').css({
    color : 'blue',
    fontSize : '30px'
})

$('p').addClass('all-para');

let div = $('div');
div.eq(0).css({
    width : '100px',
    height : '100px',
    backgroundColor: 'purple'
})
div.eq(1).css({
    width: '100px',
    marginTop: '2px',
    height: '100px',
    backgroundColor: 'orange'
})
// method 1 on how to handle events
// div.eq(0).click(function(){
//     alert('div1 clicked!');
// })

// // method 2 on how to handle events
// div.eq(1).on('click', function(){
//     alert('div2 clicked');
// })

// we can also pass the event object to function
$('a').on('click', function(event) {
    event.preventDefault();
    alert('Anchor Clicked');
})

// you can also fetch the element that is being clicked
$('div').on('click', function() {
    let element = $(this); // cur jQuery object
    element.width(element.width() + 10 + "px"); 
    element.height(element.height() + 10 + "px"); 
})
