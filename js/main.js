jQuery(document).ready(function ($) {
 //fixando header
 window.onscroll = function(){
  if (window.pageXOffset > 140){
   $("#header").addClass("active");
 } else {
   $("#header").removeClass("active");
 }
 };

 //isotopo = ao clicar em qualquer dos botões 
 //ele vai remover a classe ativa do botão e transferir para os outros.
 let btns = $("#servicos .button-group button");

 btns.click(function(e) {
   $("servicos .button-group button").removeClass("active");
   e.target.classList.add("active");

 let selector = $(e.target).attr("data-filter");
 $("#servicos .grid").isotope({
  filter: selector,
 });
 });

 $(window).on("load", function() {
  $("#servicos .grid").isotope({
    filter: "*",
   });
 });

 //magnify

 $(".grid .popup-link").magnificPopup({
  type: "image", 
  gallery: {
    enabled: true,
    tPrev:"Anterior",
    tNext: "Póxima",
    tCounter: "%curr% de %total%",
  },
 });

});