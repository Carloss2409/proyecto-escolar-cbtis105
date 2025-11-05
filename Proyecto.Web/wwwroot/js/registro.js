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
    // inicicializar los eventos
    const boton = document.getElementById("boton-registrar");
    const periodo = document.getElementById("periodo-semestral");
    boton.addEventListener("click", registrar);
    periodo.addEventListener("change", cargarGrupos);
    cargarPeriodos();
});
function registrar() {
    const periodo = document.getElementById("periodo-semestral");
    const grupo = document.getElementById("grupo");
    const registrado = document.getElementById("registrado por");
    const numControl = document.getElementById("num control");
    const alumno = document.getElementById("alumno");
    const peso = document.getElementById("peso");
    limpiarError(periodo.id);
    limpiarError(grupo.id);
    limpiarError(registrado.id);
    limpiarError(numControl.id);
    limpiarError(alumno.id);
    limpiarError(peso.id);
    let ok = true;
    if (!alumno.value || alumno.value.trim() == "") {
        mostrarError(alumno.id, "Dato requerido");
        ok = false;
    }
    if (!numControl.value || numControl.value.trim() == "") {
        mostrarError(numControl.id, "Dato requerido");
        ok = false;
    }
    else if (numControl.value.trim().length != 14) {
        mostrarError(numControl.id, "Debe capturar 14 digitos");
        ok = false;
    }
    if (!peso.value || peso.value.trim() == "") {
        mostrarError(peso.id, "Dato requerido");
        ok = false;
    }
    else {
        const pesoConNumero = parseFloat(peso.value);
        if (pesoConNumero <= 0) {
            mostrarError(peso.id, "El peso no puede ser cero o negativo");
            ok = false;
        }
    }
    if (periodo.value == "0") {
        mostrarError(periodo.id, "Dato requerido");
        ok = false;
    }
    if (grupo.value == "0") {
        mostrarError(grupo.id, "Dato requerido");
        ok = false;
    }
    if (registrado.value == "0") {
        mostrarError(registrado.id, "Dato requerido");
        ok = false;
    }
    if (!ok) {
        return;
    }
    alert("Vamos a guardar el registro");
}
function mostrarError(id, texto) {
    const divId = "error-" + id;
    const div = document.createElement("div");
    div.classList.add("invalid-feedback");
    div.id = divId;
    div.innerText = texto;
    const controlPorValidar = document.getElementById(id);
    controlPorValidar.classList.add("is-invalid");
    const padre = controlPorValidar.parentElement;
    padre.appendChild(div);
}
function limpiarError(id) {
    const divId = "error-" + id;
    const controlPorValidar = document.getElementById(id);
    const div = document.getElementById(divId);
    controlPorValidar.classList.remove("is-invalid");
    if (div) {
        div.remove();
    }
}
function cargarPeriodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "/api/periodos-semestrales";
        var respuesta = yield fetch(url);
        if (respuesta.ok) {
            //obtuvo los eleementos desde la peticion a la api
            const datos = yield respuesta.json();
            console.log("La respuesta es ", datos);
            const periodo = document.getElementById("periodo-semestral");
            periodo.innerHTML = "";
            const opcionDefault = document.createElement("option");
            opcionDefault.value = "0";
            opcionDefault.text = "(Seleccione un periodo)";
            periodo.appendChild(opcionDefault);
            datos.map(p => {
                const opcion = document.createElement("option");
                opcion.value = ((p.Anio * 100) + p.Periodo).toString();
                opcion.text = p.Anio.toString() + "-" + p.Periodo.toString() + " " + p.Nombre;
                periodo.appendChild(opcion);
            });
        }
        else {
            alert("Ocurrio un error al obtener los periodos semestrales");
        }
    });
}
function cargarGrupos() {
    return __awaiter(this, void 0, void 0, function* () {
        const periodo = document.getElementById("periodo-semestral");
        const url = "/api/grupos?periodo=" + periodo.value;
        var respuesta = yield fetch(url);
        if (respuesta.ok) {
            const grupo = document.getElementById("grupo");
            grupo.innerHTML = "";
            const opcionDefault = document.createElement("option");
            opcionDefault.value = "0";
            opcionDefault.value = "(Seleccione un grupo)";
            grupo.appendChild(opcionDefault);
            const datos = yield respuesta.json();
            console.log(datos);
        }
        else {
            alert("Ocurrio un error al obtener los datos de los grupos");
        }
    });
}
//# sourceMappingURL=registro.js.map