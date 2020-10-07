//if scroll down "pxx" from the top, show the button
window.onscroll = function() {scrollFunction()};
var pxx=300;
//scrolldelay = setTimeout('scrollFunction()',500); // scrolls every 100 milliseconds
function scrollFunction() {
    if (document.body.scrollTop > pxx || document.documentElement.scrollTop > pxx) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
//user clicks on myBtn, scroll to top
function topFunction() {
    //document.body.scrollTop = 0;
    //document.body.animate({scrollTop:0},1500);
    //document.documentElement.scrollTop = 0;
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip('show')
  //$('#myBtn').tooltip('show')
})

/*$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#myBtn').click(function () {
        $('#myBtn').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#myBtn').tooltip('show');
});*/
