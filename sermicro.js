//
//Alberto Francisco Iglesias
//sermicro 0.1


var oceane = document.getElementById("oceane");
var empresa = document.getElementById("incidencia");
var nombre = document.getElementById("admin");
var  = document.getElementById("fecha");
var horario = document.getElementById("horario");
var aviso = 1;
var correo ="";

creaccion.addEventListener("click", generarPlantilla);


function generarPlantilla() {

	//seleccionar tipo de escalado
	if (document.getElementById("N1").checked){
		correo = "escalado.obadirecto@telefonica.com";
		aviso = 1;
		console.log("tecla smant");
	}else if (document.getElementById("N2").checked) {
		aviso = 2;
		correo = "responsable.obadirecto@telefonica.com";
		console.log("telca sat");
	}

	//selecionar escalado
	if (document.getElementById("directo").checked) {
		if(aviso == 1){
			correo = "escalado.obadirecto@telefonica.com";
		}else{
			correo = "responsable.obadirecto@telefonica.com";
		}
	}else if (document.getElementById("indirecto").checked) {
		if(aviso == 1){
			correo = "escalado.obadirecto@telefonica.com";
		}else{
			correo = "responsable.obadirecto@telefonica.com";
		}
	}else if (document.getElementById("AMLT").checked) {
		if(aviso == 1){
			correo = "escalado.obadirecto@telefonica.com";
		}else{
			correo = "responsable.obadirecto@telefonica.com";
		}
	}else if (document.getElementById("NEBA").checked) {
		if(aviso == 1){
			correo = "escalado.obadirecto@telefonica.com";
		}else{
			correo = "responsable.obadirecto@telefonica.com";
		}
	}

	plantilla.innerHTML = "<br /> asunto:" + p1 + " Oceane: " + oceane.value + " - " + empresa.value +  "<br />"
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
