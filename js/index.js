var acc = $(".menu-footer__caption");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("rotate");
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
}; 

//Burger

$("button").click(function(){
  $("div").animate({left: '250px'});
}); 
$('#open').click(function () {
  $('body').addClass('burger-bg');
  $('.burger__items').fadeIn(500);
});
$('#close').click(function () {
  $('body').removeClass('burger-bg');
  $('.burger__items').fadeOut(500);
});

new WOW().init();
