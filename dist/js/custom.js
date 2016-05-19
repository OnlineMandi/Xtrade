/*
 grunt-getting-started 2016-02-25 
*/


$(document).ready(function(){

  $('form').each(function() { this.reset() });

  function showpopup(popbox,popclick){
      if($(popbox).length){
          setTimeout(function(){
              if($(popbox).is("#sign-popup")){
                  $(popbox).css({
                      display:"flex"
                  },300);
                  $(popbox).animate({
                      opacity:"1"
                  },300);
              }
          },4000);
          $(popclick).on("click",function(){
              $(popbox).css({
                  display:"flex"
              },300);
              $(popbox).animate({
                  opacity:"1"
              },300);
          });
          $(popbox).on("click",function(event){
              if($(event.target).is(popbox) || $(event.target).is(".close")){
                  $(this).animate({
                      opacity:"0"
                  },300,function(){
                      $(this).hide();
                  });
              }
          });
      }
  }

  //showpopup("#sign-popup","#rg-open");
  //showpopup("#login-popup","#lg-open");

    $(".navtoggle").click(function(){
        $(".navi-bar").toggleClass("show");
    });


 $('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  pager:false
 });


 $('.clview').bxSlider({
  auto: true,
  autoControls: true,
  pager:true
 });


 $(".bx-prev").empty().append('<i class="fa fa-angle-left"></i>');
 $(".bx-next").empty().append('<i class="fa fa-angle-right"></i>');


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