//
//Alberto Francisco Iglesias
//sermicro 0.1


var oceane = document.getElementById("oceane");
var sede = document.getElementById("sede");
var servicio = document.getElementById("servicio");
var nemonico = document.getElementById("nemonico");
var causa = document.getElementById("causa");
var sintoma = document.getElementById("sintoma");


creaccion.addEventListener("click", generarPlantilla);

function generarPlantilla() {

var indice = document.formul.cliente.selectedIndex;
var cliente = document.formul.cliente.options[indice].text;
var correo = "";
	//seleccionar tipo de cliente.
switch (indice) {
	case 1:
		correo = "Nuria.Fontanillas@wurth.es; Esteve.Boladeras@wurth.es; josep.perez@wurth.es";
		break;
	case 2:
		break;
	case 3:
		break;
	case 4:
		break;
	case 5:
		break;
	case 6:
		break;
	case 7:
		break;
	case 8:
		break;
	case 9:
		break;
	case 10:
		break;
	case 11:
		break;
	case 12:
		break;
	case 13:
		break;
	default:
}

	plantilla.innerHTML = "<strong>Correo a enviar: </strong>" + correo + " " + "CC: scesoporten2.es@orange.com; "
	+"<br /><br /><strong>Asunto: <strong>" + clente + " " + sede.value + " ID: " + oceane.value
	+"<br /><br /><br /> Tal y como hemos hablado se ha procedido a la apertura de incidencia para su revisión:"
	+"<br /><br /> Incidencia: " + oceane.value +
	+"<br />	Sede: " + sede.value
	+"<br /> Servicio: " + servicio.value
	+"<br /> Mnemónico CPE: " + nemonico.value
	+"<br /> Síntoma: " + sintoma.value
	+"<br /><br /> un saludo";
