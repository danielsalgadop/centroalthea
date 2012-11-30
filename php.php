<?php
print '<link rel="stylesheet" type="text/css" href="contenido/css.css" />';
print'<img id="foto" src="">';
print("<br><br>Email enviado CORRECTAMENTE<br>");

$aquien="centroalthea@centroalthea.es";
$motivo="PreguntaWEB";
$cuerpo="Email=".$_POST["email"]."\n".$_POST["texta"];
/*
print("aquin=".$aquien."   motivo=".$motivo."  cuerpo=".$cuerpo);
*/
mail($aquien,$motivo,$cuerpo);

/*
mail("corneliusinlove@gmail.com","PreguntaWEB","Este es el cuerpo del mensaje");
*/

print("<center><img src='contenido/5.contacto/images/tick_verde_email_enviado.png'></center>");


/*
	foreach($_POST as $nombre_campo => $valor){
   $asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
}   
*/

/*
print($_POST["texta"]);
print($_POST["email"]);
*/

/*
   mail("corneliusinlove@gmail.com","PreguntaWEB","Email enviado por=".$_POST["email"]."Este es el cuerpo del mensaje") 
*/
print ' 
<script type="text/javascript">
	var cuala="haznos_una_pregunta";
</script>
<script type="text/javascript">
document.getElementById("foto").src="contenido/5.contacto/images/"+cuala+".jpg";
</script>';
?>
