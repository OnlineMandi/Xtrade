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

 $("#faq li span").click(function(){
   $("#faq li span").next().slideUp();
   $(this).next().slideDown();
 })
});