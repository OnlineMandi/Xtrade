/*
 grunt-getting-started 2016-02-25 
*/


$(document).ready(function(){
 var i = 1;
 setInterval(function(){
  i--;
  var bgposi = i + "px center";

  $(".footer-logolist").css({
   backgroundPosition:bgposi,
  });
 }, 10);

 $("#faq li span").click(function(event){

  var target = $(event.target).next().is(':visible');
  if(target)
  {
   $(this).next().slideUp();
   $("i",this).removeClass("fa-minus").addClass("fa-plus");
   return;
  }
  else {
   $("#faq li span").next().slideUp();
   $("#faq li span i").removeClass("fa-minus").addClass("fa-plus");
   $(this).next().slideDown();
   $("i",this).addClass("fa fa-minus");
  }

 })
});