/*$(document).ready(function() {
  $('.carousel').carousel({
    interval: 6000
  })
});*/
function killCopy(e){
  return false
}
function reEnable(){
  return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
  document.onmousedown=killCopy
  document.onclick=reEnable
  //var acc=document.getElementsById("btn1");
  var acc=document.getElementsById("myBtn");
  for(var i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
      this.classList.toggle("active");
      var panel=this.nextElementSibling;
      if(panel.style.display==="block"){
        panel.style.display="none";
      }else{
        panel.style.display="block";
      }
      });
  }
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
        
  ('#myBtn').tooltip('show');*/
  });
}