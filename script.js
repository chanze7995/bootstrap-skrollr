$(window).scroll(function(evt){
  if ($(window).scrollTop()>0){
    $(".navbar").removeClass("nb_top")}
  else{
    $(".navbar").addClass("nb_top")}
});

var s = skrollr.init();