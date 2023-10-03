// let firstPara = document.getElementById('para1');
// firstPara.innerHTML = 'Welcome';

$('#para1').html('Welcome');
// $('#para1').hide();
$('p').html('Welcome Welcome');

let allParas = $('p'); /* returns jQuery object containing all the p elems */

let p1 = allParas.eq(0); /* .eq(0) returns the jQuery Obj of 1st p elem */
p1.html('1st paragraph element');

let p2 = allParas[1]; /* [1] returns the DOM object of the 2nd p elem */
p2.innerHTML = "2nd paragraph Element";

$(p2).html('2nd p elem as Jquery Object');
// p2.html('updated 2nd p'); invalid 
// sim p1.innerHTML is invalid
// but $(DOM object) returns a jquery Object
/* 
    1. function $(query) {

        returns a Jquery object(behind the scenes $ fn performs similar to document.querySelector(query), but returns a Jquery obj.), that's why it has a html function > to alter the inner HTML

    }

    2. similarly other fns of hte jQuery Obj are : .hide() - hide the elem, .text() - alter inner text, .html().addClass('class_name'), .attr() - get/set val of an attr, .val() - get/set the val of form elem, .height(), .width()
*/