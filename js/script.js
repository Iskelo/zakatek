$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.navbar-right').toggleClass('active');
		$('body').toggleClass('lock');
  }); 
});

var slideIndex = 0;
showSlides();
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("my-slides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000); 
 }
 
 window.onscroll = function() {scrollFunction()};
 mybutton = document.getElementById("myBtn");
 function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	  document.getElementById("navbar").style.padding = "10px 15px 0 10px";    
	  document.getElementById("logo").style.width = "192px";
	  document.getElementById("logo").style.height = "50px";
	  document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.8)";
	  document.getElementById("menu").style.paddingTop = "10px";
	} else {
	  document.getElementById("navbar").style.padding = "15px 10px";
	  document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
	  document.getElementById("logo").style.width = "231px";
	  document.getElementById("logo").style.height = "60px";
	  document.getElementById("menu").style.paddingTop = "15px";
	}
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  mybutton.style.display = "block";
	} else {
	  mybutton.style.display = "none";
	}
 }
 
 function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0; 
 }