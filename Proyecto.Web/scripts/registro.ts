document.addEventListener("DOMContentLoaded", () => {
// inicicializar los eventos
const boton = document.getElementById("boton-registrar");
boton.addEventListener("click", registrar);
    });
    function registrar(){
        const periodo = document.getElementById("periodo-semestral") as HTMLSelectElement; 
        const grupo = document.getElementById("grupo") as HTMLSelectElement;
        const registrado = document.getElementById("registrado por") as HTMLSelectElement;
        const numControl = document.getElementById("num control") as HTMLInputElement;
        const alumno = document.getElementById("alumno") as HTMLInputElement;
        const peso = document.getElementById("peso") as HTMLInputElement;

        limpiarError(periodo.id);
        limpiarError(grupo.id);
        limpiarError(registrado.id);

        limpiarError(numControl.id);
        limpiarError(alumno.id);
        limpiarError(peso.id);

        let ok = true;

if(!alumno.value || alumno.value.trim() == ""){
     mostrarError(alumno.id, "Dato requerido");
        ok = false;
}

if(!numControl.value || numControl.value.trim() == ""){
    mostrarError(numControl.id, "Dato requerido");
    ok = false;
}
else if(numControl.value.trim().length != 14){
    mostrarError(numControl.id, "Debe capturar 14 digitos");
    ok = false;
        }
if(!peso.value || peso.value.trim() == ""){
    mostrarError(peso.id, "Dato requerido");
    ok = false;
    }
    else {
const pesoConNumero = parseFloat(peso.value);
if(pesoConNumero <= 0 ){
    mostrarError(peso.id, "El peso no puede ser cero o negativo");
    ok = false;
}
}

if(periodo.value  == "0"){
    mostrarError(periodo.id, "Dato requerido");
    ok = false;
}
    if(grupo.value  == "0"){
    mostrarError(grupo.id, "Dato requerido");
    ok = false;
}
       if(registrado.value  == "0"){
    mostrarError(registrado.id, "Dato requerido");
    ok = false;

}
if(!ok){
    return;
}
alert("Vamos a guardar el registro");
}


        function mostrarError(id: string, texto: string){
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

 function limpiarError(id: string){
    const divId = "error-" + id;
     const controlPorValidar = document.getElementById(id);
     const div = document.getElementById(divId);
     controlPorValidar.classList.remove("is-invalid");
        if(div){
            div.remove();
        }
         }