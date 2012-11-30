function EsNuevo(){ // decide si el usuario ha cargado la url limpia (sin ?) o no // ME FALTA CARGARLO EN EL onload del body
	tieneinterrogacion = /\?/;
	if (tieneinterrogacion.exec(document.URL)){
		CargadorIframe();
	}	
}
function ReplegarTodos(){
	//~ alert("entrass");
	//~ $('class*=subna').slideToggle("slow");   // esto no funciona
	$("#subnav"+antes).slideUp("slow");
	//~ $("#subnav"+este)
}
var antes = "kk";  // necesario para cebar por primera vez al FadeQUien
function FadeQuien2(este){
	//~ if (antes == "kk"){
	//~		 $("#subnav"+este).slideDown("slow");
	//~		 console.log('PRIMER BOTON QUE PULSO antes='+antes+' PONGO este='+este); } 
	if (antes == este){
		$("#subnav"+este).slideToggle("slow");
	}
	else { //~ if (antes != este){
			//~ console.log('QUITO antes='+antes+' PONGO este='+este);
			$("#subnav"+antes).slideUp("slow");
			$("#subnav"+este).slideDown("slow");
		}
	antes = este;
}


function CargadorIframe(){
//		window.location.href = window.URL + 'contenido/toe.html';
	var urlactual = document.URL;
	var cual = urlactual.split('?');
	var nuevo = cual[1].replace(/#/g,'/');
	//window.frames['nombreIframe'].location = nuevo;
//	document.getElementById('IdIframe').src=nuevo;
	document.getElementById('IdIframe').src=nuevo;
	//window.location = cual[0]+'?'+nuevo;
	//window.location = "cual"; //[0]+'?'+nuevo;
	//document.getElementById('aqui').innerHTML =nuevo;
	//window.location = 'http://wwww.google.com';
}
function CargadorIframe2 (dnd) {
	//document.getElementById('IdIframe').src=dnd;
	window.frames['nombreIframe'].location = dnd;
}
