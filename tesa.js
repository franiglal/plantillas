//
//Alberto Francisco Iglesias
//sermicro 0.1


var oceane = document.getElementById("oceane");
var incidencia = document.getElementById("incidencia");
var admin = document.getElementById("admin");
var fecha = document.getElementById("fecha");
var horario = document.getElementById("horario");
var aviso = 1;
var correo = "";
var nivel = "";
var causa = document.getElementById("causa");
var circuito = "";
var creaccion = document.getElementById("creacion");

creaccion.addEventListener("click", generarPlantilla);


function generarPlantilla() {

	//seleccionar tipo de escalado
	if (document.getElementById("N1").checked){
		nivel = "N1";
		aviso = 1;
		console.log("tecla smant");
	}else if (document.getElementById("N2").checked) {
		nivel = "N2";
		aviso = 2;
		console.log("telca sat");
	}

	//selecionar escalado
	if (document.getElementById("directo").checked) {
		circuito = "ULLADSL/SHDSL";
		if(aviso == 1){
			correo = "escalado.obadirecto@telefonica.com";
		}else{
			correo = "responsable.obadirecto@telefonica.com";
		}
	}else if (document.getElementById("indirecto").checked) {
		circuito = "ADSL-IP/GIGADSL";
		if(aviso == 1){
			correo = "escalado.obaindirecto@telefonica.com";
		}else{
			correo = "responsable.obaindirecto@telefonica.com";
		}
	}else if (document.getElementById("AMLT").checked) {
		circuito = "AMLT";
		if(aviso == 1){
			correo = "escalado.amlt@telefonica.com";
		}else{
			correo = "responsable.amlt@telefonica.com";
		}
	}else if (document.getElementById("NEBA").checked) {
		circuito = "NEBA";
		if(aviso == 1){
			correo = "escalado.neba@telefonica.com";
		}else{
			correo = "responsable.neba@telefonica.com";
		}
	}else if (document.getElementById("ORLA").checked) {
		circuito = "ORLAE";
		if(aviso == 1){
			correo = "EscaladoN1.circuitos@telefonica.com";
		}else{
			correo = "josefernando.chonatavillamarin@telefonica.com";
		}
	}
	plantilla.innerHTML = "<strong>Correo a enviar: </strong>" + correo
	 + "<br /> <br /><strong>asunto:</strong> ORANGE # " + nivel + " # " + admin.value + " // " + circuito + " // " + incidencia.value + " // " + oceane.value
	 + "<br /> <br />Tenemos abierta una incidencia por " + causa.value + " con el número administrativo " + admin.value
	 + " ,  el número de secuencia en Telefónica " + incidencia.value + " y el número de incidencia de Orange " + oceane.value + "."
 	 + "<br /><br/ > La incidencia está abierta desde el pasado día " + fecha.value + " a las " + horario.value + ", y todavía no hemos recibido información alguna por parte de los técnicos de Telefónica."
     + "<br /><br /> Necesitamos que se revise lo antes posible, ya que llevamos mas de 24 horas con la incidencia abierta."
     + "<br /><br /> Solicitamos escalado a " + nivel + ".";

}
