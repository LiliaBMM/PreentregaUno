alert ("Bienvenidos a nuestro centro de salud");
function solicitarNombre(){
    let nombrePaciente = prompt("Ingrese su nombre");
    let apellidoPaciente = prompt("Ingrese su apellido");
    alert (`Bienvenido, ${nombrePaciente} ${apellidoPaciente}`);
}
function seleccionMedico(){
    let medico = prompt("Ingrese el número del médico que desea ver.");
    while(medico != "ESC"){
        switch(medico){ 
            case "1":
                alert("El cirujano lo atenderá en breve");
                solicitarNombre();
                break;
            case"2":
                alert("El pediatra lo atenderá en breve");
                solicitarNombre();
                break;
            case"3":
                alert("El odontólogo lo atenderá en breve");
                solicitarNombre();
                break;
            default:
                alert ("ERROR");
                seleccionMedico();
                break;    
        }
     seleccionMedico();          
    }
}
for (let turno=1; turno<=2 ; turno++){
    if (turno <=2){
        solicitarNombre();
        seleccionMedico();
        alert (`Quedan ${turno} disponibles`);
    }
     else{
        alert ("Los turnos por el día de hoy están agotados, por favor, vuelva mañana. Hasta luego");
     } 
    }
