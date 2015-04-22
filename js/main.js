$(document).ready(function(){
	$("#fullpage").fullpage({
		
	easing: 'easeOutBack',
	autoScrolling:true,
	scrollBar: true,
	normalScrollElements: '#section0',
	scrollingSpeed:1200,
	fitToSection:false,
	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],

	  afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            if(index == 1){
                $('#introduccion').focus();
            }

        }
	});
});

    

$(window).scroll(function (event) {
    // Obtener la posicion del scroll
    var scroll = $(window).scrollTop();

    // si ya paso la primera seccion (400px) pasar a la siguiente
    if(scroll == 500 ){
       $.fn.fullpage.moveSectionDown();
        console.log("estas en "+scroll);
    }
}
);



$(function(){
    $('#introduccion').slimScroll({
        // height: 'auto',
        height:'auto',
        allowPageScroll:true
    }).bind('slimscroll', function(e, pos) {
        //avanza a la siguiente seccion cuando el scroll llega al fondo del texto
   	 	// if(pos=="bottom"){
   	 	// 	$.fn.fullpage.moveSectionDown();
   	 	// }
    });
});


