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
var aviso = "";
var urgente = document.getElementById("urgente");
var p1 ="";
var descripcion = document.getElementById("descripcion");
var creaccion = document.getElementById("creacion");
var plantilla = document.getElementById("plantilla");



creaccion.addEventListener("click", generarPlantilla);

function generarPlantilla() {

	if (document.getElementById("smat").checked){
		aviso = "SMANT";
		console.log("tecla smant");
	}else if (document.getElementById("sat").checked) {
		aviso = "SATS01";
		console.log("telca sat");
	}

	if (document.getElementById("p1").checked){
		p1 = "P1";

	}else if (document.getElementById("sat").checked) {
		p1 = "P2";

	}

	plantilla.innerHTML = "<strong>Correo a enviar: </strong>" + " coordinacion.orange.cpe@sermicro.com; gestion.servicedesk@sermicro.com" + " "
	 +"<br /><strong>CC: </strong>scesoporten2.es@orange.com; "
	 +"<br /><strong>asunto: </strong>" + p1 + " Oceane: " + oceane.value + " - " + empresa.value +  "<br />"
	 + "<br />" + " - nº de ticket de ORANGE: " + oceane.value
	 + "<br />" + " - datos de cliente: <br />"
	 + "    nombre: " + nombre.value  + "<br />"
	 + "		dirección: " + direccion.value + "<br />"
	 + "    Telefono: " + telefono.value  + "<br />"
	 + " - horario de atención del cliente: " + horario.value + "<br />"
	 + " - plantilla: no <br />  - modelo de equipo instalado (incluida tarjetería): " + modelo.value
	 + "<br />" + " - tipo de aviso: " + aviso
	 + "<br />" + " - descripción de la solicitud: <br />"
	 + descripcion.value
	 + "<br /";
}
