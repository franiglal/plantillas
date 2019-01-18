//
//Alberto Francisco Iglesias
//sermicro 0.1


var oceane = document.getElementById("oceane");
var sede = document.getElementById("sede");
var servicio = document.getElementById("servicio");
var nemonico = document.getElementById("nemonico");
var causa = document.getElementById("causa");
var sintoma = document.getElementById("sintoma");
var creaccion = document.getElementById("creacion");

creaccion.addEventListener("click", generarPlantilla);

function generarPlantilla() {

	var indice = document.formulario2.cliente.selectedIndex;
	var cliente = document.formulario2.cliente.options[indice].text;
	var correo = "";
	//seleccionar tipo de cliente.
	switch (indice) {
		case 0:
			correo = "Nuria.Fontanillas@wurth.es; Esteve.Boladeras@wurth.es; josep.perez@wurth.es";
			break;
		case 1:
			correo = "pnte de Eva";
			break;
		case 2:
			correo = "luis.seilices@otis.com";
			break;
		case 3:
			correo = "vortiz@centrofarmaceutico.es; alopez@centrofarmaceutico.es; fguijarro@centrofarmaceutico.es; jortiz@centrofarmaceutico.es; jmaza@centrofarmaceutico.es";
			break;
		case 4:
			correo = "pnte de Eva";
			break;
		case 5:
			correo = "espanainformatica@kiabi.com";
			break;
		case 6:
			correo = "lista.atnetworkservicesvoice@axa-tech.com; jesus.zaballos@axa.es; olga.yuste@axa.es";
			break;
		case 7:
			correo = "fjvalles@sonaemc.com; suporte.somaemc@nos.pt; nuno.sanches@parceiros.nos.pt";
			break;
		case 8:
			correo = "fernandojavier.jimenez@engie.com; joseantonio.perez@engie.com; antonio.mendiola@engie.com; esther.pina@engie.com";
			break;
		case 9:
			correo = "fernandojavier.jimenez@engie.com; joseantonio.perez@engie.com; antonio.mendiola@engie.com; esther.pina@engie.com";
			break;
		case 10:
			correo = "fernandojavier.jimenez@engie.com; joseantonio.perez@engie.com; antonio.mendiola@engie.com; esther.pina@engie.com";
			break;
		case 11:
			correo = "fernandojavier.jimenez@engie.com; joseantonio.perez@engie.com; antonio.mendiola@engie.com; esther.pina@engie.com";
			break;
		case 12:
			correo = "fernandojavier.jimenez@engie.com; joseantonio.perez@engie.com; antonio.mendiola@engie.com; esther.pina@engie.com";
			break;
		default:
	}

	plantilla.innerHTML = "<strong>Correo a enviar: </strong>" + correo + " "
	+"<br /><strong>CC: </strong>scesoporten2.es@orange.com; "
	+"<br /><br /><strong>Asunto: </strong>" + cliente + " " + sede.value + " ID: " + oceane.value
	+"<br /><br /><br /> Tal y como hemos hablado se ha procedido a la apertura de incidencia para su revisión:"
	+"<br /><br /> Incidencia: " + oceane.value
	+"<br />	Sede: " + sede.value
	+"<br /> Servicio: " + servicio.value
	+"<br /> Mnemónico CPE: " + nemonico.value
	+"<br /> Síntoma: " + sintoma.value
	+"<br /><br /> un saludo";
}
