//funcion panel de entrada
//mostramos panel al iniciar pagina.
function flotante(tipo){
	//si empezar entonces mostrar index con sistema solar.
	if (tipo==1){
		$("button").show();
	    $('#contenedor').show();
        $('#flotante').animate({
            marginTop: "-10000px"
        });
	}
	//Al cargar la pagina mostrar el div flotante
	if (tipo==2){
		 $("button").hide();
		 $('#contenedor').hide();
   		 $('#flotante').animate({
            marginTop: "-300px"
         });
	}
};

//paneles informativos planetas y efectos
(function(){
	$("#sol").mouseenter(function(event) {
		  //mostrar panel informativo
		  $("#info").show('slow/400/fast');
	});

    $("#sol").mouseleave(function(event) {
    	   //ocultar panel informativo
		  $("#info").hide('slow/400/fast');	  	
	});

	$("#jupiter").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoJupiter").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionJupiter").css("-webkit-animation-play-state", "paused");

	});

    $("#jupiter").mouseleave(function(event) {
    	   //ocultar panel informativo
		  $("#infoJupiter").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionJupiter").css("-webkit-animation-play-state", "running");	  	
	}); 
    
	$("#tierra").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoTierra").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionTierra").css("-webkit-animation-play-state", "paused");

	});

	$("#tierra").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoTierra").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionTierra").css("-webkit-animation-play-state", "running");	  	
	});
	$("#saturno").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoSaturno").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionSaturno").css("-webkit-animation-play-state", "paused");

	});

	$("#saturno").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoSaturno").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionSaturno").css("-webkit-animation-play-state", "running");	  	
	});

	$("#mercurio").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoMercurio").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacion").css("-webkit-animation-play-state", "paused");

	});

	$("#mercurio").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoMercurio").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacion").css("-webkit-animation-play-state", "running");	  	
	});

	$("#marte").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoMarte").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionMarte").css("-webkit-animation-play-state", "paused");

	});

	$("#marte").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoMarte").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionMarte").css("-webkit-animation-play-state", "running");	  	
	});

	$("#venus").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoVenus").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionVenus").css("-webkit-animation-play-state", "paused");

	});

	$("#venus").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoVenus").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionVenus").css("-webkit-animation-play-state", "running");	  	
	});
	$("#Urano").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoUrano").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionUrano").css("-webkit-animation-play-state", "paused");

	});

	$("#Urano").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoUrano").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionUrano").css("-webkit-animation-play-state", "running");	  	
	}); 
	$("#neptuno").mouseenter(function(event) {
		  //mostrar panel informativo 
		  $("#infoNeptuno").show('slow/400/fast');
		  //parar animacion para poder ver menu.
		  $("#traslacionNeptuno").css("-webkit-animation-play-state", "paused");

	});

	$("#neptuno").mouseleave(function(event) {
		   //ocultar panel informativo
		  $("#infoNeptuno").hide('slow/400/fast');
		  //iniciar animacion
		  $("#traslacionNeptuno").css("-webkit-animation-play-state", "running");	  	
	});          


}());