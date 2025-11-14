document.addEventListener("DOMContentLoaded", () => {
    var periodo = document.getElementById("periodo") as HTMLSelectElement;
    var buscar = document.getElementById("boton-buscar");

    buscar.addEventListener("click", clickBoton);
    cargarPeriodos(periodo);
});

function clickBoton(){
    cargarRegistros();
    mostrarPesoTotal();
    cargarPesoPorGrupo(); //grupotabla
}

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
            const format = new Intl.DateTimeFormat("es-MX");

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

async function mostrarPesoTotal(){
    var periodo = document.getElementById("periodo") as HTMLSelectElement;
    const controlPeso = document.getElementById("peso-total")
    const url = "/api/pet/registro/peso-total?periodo=" + periodo.value;

    const respuesta = await fetch(url);
    if(respuesta.ok){
        const datos: peso = await respuesta.json();
        controlPeso.innerText = datos.PesoTotal + " KG";
    }
    else {
        alert("Ocurrió un error al obtener el peso total");
    }
}

// Funcion tabla grupos
async function cargarPesoPorGrupo(){
    var periodo = document.getElementById("periodo") as HTMLSelectElement;
    const url = "/api/pet/registro/peso-por-grupo?periodo=" + periodo.value;

    const respuesta = await fetch(url);
    const tablebody = document.getElementById("tabla-grupos");
    
    tablebody.innerHTML = "";

    if(respuesta.ok){
        const datos: Array<PesoGrupo> = await respuesta.json();
        console.log("POR GRUPO:", datos);

        datos.map(g => {
            const fila = document.createElement("tr");
            const colGrupo = document.createElement("td");
            const colTotal = document.createElement("td");

            colGrupo.innerText = g.Grupo;
            colTotal.innerText = g.Total.toString() + " KG";

            fila.appendChild(colGrupo);
            fila.appendChild(colTotal);

            tablebody.appendChild(fila);
        });
    }
    else{
        alert("Error al cargar los grupos");
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

type peso = {
    PesoTotal: number
}

type PesoGrupo = {
    Grupo: string,
    Total: number
}