alert ("Bienvenidos a nuestro centro de salud");
const turno = 8;
function solicitarNombre(){
    let nombrePaciente = prompt("Ingrese su nombre");
    let apellidoPaciente = prompt("Ingrese su apellido");
    alert (`Bienvenido, ${nombrePaciente} ${apellidoPaciente}`);
} 
function seleccionMedico(){
    let medico = prompt("Ingrese el número del médico que desea ver.");
            switch(medico){ 
            case "1":
                alert("El cirujano lo atenderá en breve");
                break;
            case"2":
                alert("El pediatra lo atenderá en breve");
                break;
            case"3":
                alert("El odontólogo lo atenderá en breve");
                break;
            default:
                alert ("ERROR");
                seleccionMedico();
                break;    
        }    
    }
for (let i=1; i<=turno ; i++){
        solicitarNombre();
        seleccionMedico();
        alert (`Quedan ${turno-i} turnos disponibles`);
} 
    alert ("Los turnos por el día de hoy están agotados, por favor, vuelva mañana. Hasta luego");
     

