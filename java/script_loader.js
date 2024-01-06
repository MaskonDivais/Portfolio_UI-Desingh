 $.noConflict();
jQuery( document ).ready(function( $ ) {



$.fn1.animate_Text = function () {
  var string = this.text();
  return this.each(function () {
    var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
    $this.find('span.new').each(function (i, el) {
      setTimeout(function () {$(el).addClass('div_opacity');}, 500 * i);
    });
  });
};
$('#example').show();
$('#example').animate_Text();

const myTimeout = setTimeout(myGreeting, 4000);

function myGreeting() {
$.fn1.animate_Text = function () {
  var string = this.text();
  return this.each(function () {
    var $this1 = $(this);
    $this1.html(string.replace(/./g, '<span class="new1">$&</span>'));
    $this1.find('span.new1').each(function (i, el) {
      setTimeout(function () {$(el).addClass('div_opacity1');}, 20 * i);
    });
  });
};
$('#example1').show();
$('#example1').animate_Text();
setTimeout(function(){
$('.cont_loder_fon').addClass('start');},500);
}

}); 