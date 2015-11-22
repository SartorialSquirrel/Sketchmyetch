$(document).ready(function(){
var i=1;
for(;i<=5000;i++){
    $('<div/>', {
        'class':'sketch',
    }).appendTo('.container');
}
var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
$('.sketch').mouseover(function(){
	$(this).css("background-color", randomColorChange);
	});

$("#clearbutton").click(function(){
         location.reload(true);
});
$("#tablebutton").click(function(){
	var retVal = prompt("What size boxes would you like?");
	$('.sketch').css({"width": retVal, "height": retVal});
		});
/*$("#shadebutton".click(function(){
  add 10% color on each mouseover*/
});
