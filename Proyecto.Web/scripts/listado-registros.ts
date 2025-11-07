document.addEventListener("DOMContentLoaded", () => {
    var periodo = document.getElementById("periodo") as HTMLSelectElement;
    var buscar = document.getElementById("boton-buscar");

    buscar.addEventListener("click", cargarRegistros);
    cargarPeriodos(periodo);
});

async function cargarRegistros(){
    var periodo = document.getElementById("periodo") as HTMLSelectElement;
    const url = "/api/pet/registro?periodo=" + periodo.value;
    const respuesta = await fetch(url);

    const tablebody = document.getElementById("registros");
    tablebody.innerHTML = "";
    if(respuesta.ok){
        const datos: Array<Registro> = await respuesta.json();
        console.log(datos);

        datos.map(r => {
            const fila = document.createElement("tr");
            const colPeriodo = document.createElement("td");
            const colFecha = document.createElement("td");
            const colRegistradoPor = document.createElement("td");
            const colAlumno = document.createElement("td");
            const colPeso = document.createElement("td");
            const colGrupo = document.createElement("td");

            const fecha = new Date(r.Fecha);
            const format =new Intl.DateTimeFormat("es-MX");

            colPeriodo.innerText = r.PeriodoSemestral.toString();
            colFecha.innerText = format.format(fecha);
            colRegistradoPor.innerText = r.RegistradoPor;
            colAlumno.innerText = r.NumControl + " - " + r.Alumno;
            colPeso.innerText = r.Peso.toString();
            colGrupo.innerText = r.Grupo;

            fila.appendChild(colPeriodo);
            fila.appendChild(colFecha);
            fila.appendChild(colRegistradoPor);
            fila.appendChild(colGrupo);
            fila.appendChild(colAlumno);
            fila.appendChild(colPeso);

            tablebody.appendChild(fila);
        });
    }
else{
    alert("Error al cargar los registros");
}
}

type Registro = {
    Id: string,
    PeriodoSemestral: number,
    NumControl: string,
    Alumno: string,
    Grupo: string,
    Fecha: string,
    RegistradoPor: string,
    Peso: number
}


