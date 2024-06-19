// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//dynamic footer content
var year = new Date().getFullYear();
var date = `©️ RaktimPortfolio ${year} . All Rights Reserved`;
document.getElementsByTagName('footer')[0].innerHTML = date;
