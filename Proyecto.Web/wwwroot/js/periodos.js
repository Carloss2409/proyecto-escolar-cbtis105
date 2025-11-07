var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function cargarPeriodos(periodo) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "/api/periodos-semestrales";
        var respuesta = yield fetch(url);
        if (respuesta.ok) {
            //obtuvo los eleementos desde la peticion a la api
            const datos = yield respuesta.json();
            console.log("La respuesta es ", datos);
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
//# sourceMappingURL=periodos.js.map