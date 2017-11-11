$(document).ready(function(){

	$("#pagina2").hide();
	$("#pagina3").hide();
	

	$("#link3").click(function(){
		$("#pagina2").hide();
		$("#pagina3").hide();
		$("#pagina1").show("fast");
		});

	$("#atajo").click(function(){
		$("#pagina2").hide();
		$("#pagina1").hide();
		$("#pagina3").show("fast");
		});

	$("#link1").click(function(){
		$("#pagina1").hide();
		$("#pagina3").hide();
		$("#pagina2").show("fast");
		});

	$("#link2").click(function(){
		$("#pagina2").hide();
		$("#pagina3").hide();
		$("#pagina1").show("fast");
		});

	$("#link4").click(function(){
		$("#pagina1").hide();
		$("#pagina3").hide();
		$("#pagina2").show("fast");
		});


	$("#a1").click(function(){
		$("#pagina2").hide();
		$("#pagina3").hide();
		$("#pagina1").show("fast");
		});

	$("#a2").click(function(){
		$("#pagina1").hide();
		$("#pagina3").hide();
		$("#pagina2").show("fast");
		});


		$("#mainmenu").click(function(){
		$("#pagina1").hide();
		$("#pagina2").hide();
		$("#pagina3").show("fast");
		});



});
