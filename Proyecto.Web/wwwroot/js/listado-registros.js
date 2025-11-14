var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    var periodo = document.getElementById("periodo");
    var buscar = document.getElementById("boton-buscar");
    buscar.addEventListener("click", clickBoton);
    cargarPeriodos(periodo);
});
function clickBoton() {
    cargarRegistros();
    mostrarPesoTotal();
    cargarPesoPorGrupo(); //grupotabla
}
function cargarRegistros() {
    return __awaiter(this, void 0, void 0, function* () {
        var periodo = document.getElementById("periodo");
        const url = "/api/pet/registro?periodo=" + periodo.value;
        const respuesta = yield fetch(url);
        const tablebody = document.getElementById("registros");
        tablebody.innerHTML = "";
        if (respuesta.ok) {
            const datos = yield respuesta.json();
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
        else {
            alert("Error al cargar los registros");
        }
    });
}
function mostrarPesoTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        var periodo = document.getElementById("periodo");
        const controlPeso = document.getElementById("peso-total");
        const url = "/api/pet/registro/peso-total?periodo=" + periodo.value;
        const respuesta = yield fetch(url);
        if (respuesta.ok) {
            const datos = yield respuesta.json();
            controlPeso.innerText = datos.PesoTotal + " KG";
        }
        else {
            alert("Ocurrió un error al obtener el peso total");
        }
    });
}
// Funcion tabla grupos
function cargarPesoPorGrupo() {
    return __awaiter(this, void 0, void 0, function* () {
        var periodo = document.getElementById("periodo");
        const url = "/api/pet/registro/peso-por-grupo?periodo=" + periodo.value;
        const respuesta = yield fetch(url);
        const tablebody = document.getElementById("tabla-grupos");
        tablebody.innerHTML = "";
        if (respuesta.ok) {
            const datos = yield respuesta.json();
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
        else {
            alert("Error al cargar los grupos");
        }
    });
}
//# sourceMappingURL=listado-registros.js.map