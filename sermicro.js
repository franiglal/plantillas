//
//Alberto Francisco Iglesias
//sermicro 0.1


var oceane = document.getElementById("oceane");
var empresa = document.getElementById("empresa");
var nombre = document.getElementById("nombre");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono")
var horario = document.getElementById("horario");
var modelo = document.getElementById("modelo");
//var smat = document.getElementById("smat");
//var sat = document.getElementsById("sat");
//var urgente = document.getElementById("urgente");
var descripcion = document.getElementById("descripcion");
var creaccion = document.getElementById("creacion");
var plantilla = document.getElementById("plantilla");



creaccion.addEventListener("click", generarPlantilla);

function generarPlantilla() {
	plantilla.innerHTML = "+++++++++++++++++++++++++++++++++++++++++++++++++++ <br />"
	 + "<br /> asunto: Oceane: " + oceane.value + " - " + empresa.value +  "<br />"
	 + "<br />" + " - nº de ticket de ORANGE: " + oceane.value
	 + "<br />" + " - datos de cliente: <br />"
	 + "    nombre: " + nombre.value  + "<br />"
	 + "		dirección: " + direccion.value + "<br />"
	 + "    Telefono: " + telefono.value  + "<br />"
	 + " - horario de atención del cliente: " + horario.value + "<br />"
	 + " - plantilla: no <br />  - modelo de equipo instalado (incluida tarjetería): " + modelo.value
	 + "<br />" + " - tipo de aviso: " + "smnat"
	 + "<br />" + " - descripción de la solicitud: <br />"
	 + descripcion.value
	 + "<br /";
}
