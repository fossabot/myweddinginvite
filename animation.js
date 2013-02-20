

$(document).ready(function()
{

$('.gbtc .gbt a').click(function() {
//	alert('dfdfd');
	//var noty_id = noty({text: 'noty - a jquery notification library!'});
		noty({layout: 'bottomLeft', text: 'Hello, concentrate on the Wedding details!', type: 'error'});

});


$('#btn-am-lucky').click(function() {
		noty({layout: 'bottomLeft', text: 'Thanks, Thanks, Thanks! ;) Now, click search button!', type: 'error'});

});

$('a.other-footer-links').click(function() {
		noty({layout: 'bottomLeft', text: 'Huh??? Get back to the wedding details!', type: 'error'});

});

$('a.honeymoon').click(function() {
		noty({layout: 'bottomLeft', text: 'Please check back after Mar 25th', type: 'error'});

});

$('a.much-more').click(function() {
		noty({layout: 'bottomLeft', text: 'What do u need more than this??? Save the dates and be there!', type: 'error'});

});


$('a.disclaimer').click(function() {

		noty({
			layout: 'bottomLeft',
			text: '<h3>Disclaimer:</h3>All the contents placed here are for fun only. Purely not in an intention to hurt anyone. Just in an idea to pull you all to the days we enjoyed most in our life. Also the logos and other imitation works are just for fun and not to deface on any website search and its related services. Please click OK and Agree to this disclaimer.',
			buttons: [
		    {type: 'btn btn-primary', text: 'Agree', click: function($noty) {$noty.close(); noty({force: true, layout: 'bottomLeft', text: 'Good, We appreciate that you agreed for this disclaimer.', type: 'success'});} },
		    {type: 'btn btn-danger', text: 'Disagree', click: function($noty) {$noty.close(); noty({force: true, layout: 'bottomLeft', text: 'Automatically agreed with this disclaimer.', type: 'error'});} }
		    ],
		  closable: false,
		  timeout: false
		});
		return false;

});


$('#google-search-btn').click(function() {
		if ($('p.caption').html().length == 0) {
noty({layout: 'bottomLeft', text: 'Why dont you type something before hitting search button?', type: 'error'});
}
else {

if ($('p.caption').html().length < 20) { noty({layout: 'bottomLeft', text: 'Not so quick! We need you to complete your search term... so hit a few more keys', type: 'error'}); } else {document.location.href="result.html"; }
}


});

    setInterval ("cursorAnimation()", 600 );

var count=$('p.caption').html().length;

var temp= new Array("K","r","i","t","h","i","k","a"," ","a","n","d"," ","D","i","n","e","s","h"," ","are"," ","get","ti","ng"," ","hit","ch","ed");



    $(document).keydown(function(event) {
	if (count <= 0 ) $("#mask").show(); else	$("#mask").hide();
    if (event.which == 8){
		if (count>0){
			count--;
			$('p.caption').html($('p.caption').html().substr(0, $('p.caption').html().length-1));
			if (count <= 0)	$("#mask").show();
		}
		event.preventDefault();
    }
    else
    {
		$("#mask").hide();
       if (count<29){
          $('p.caption').html($('p.caption').html()+temp[count]);
          count++;
        }
if ((count==29)&&(event.which==13)) {document.location.href="result.html";}

    }
event.preventDefault();
});

});

var captionLength = 0;
var caption = "";

function cursorAnimation()
{
  $("p.cursor").animate(
  {
    opacity: 0
  }, "fast", "swing").animate(
  {
    opacity: 1
  }, "fast", "swing");
}




