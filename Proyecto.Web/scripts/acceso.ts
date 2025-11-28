document.addEventListener("DOMContentLoaded", () =>{
const boton = document.getElementById ("btn-accesar");
boton.addEventListener("click", accesar);


});

function accesar(){
const correo = document.getElementById ("correo") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

let ok = true;

limpiarError(correo.id);
limpiarError(password.id);

if(!correo.value){
ok = false;
mostrarError(correo.id, "Dato requerido");

}
if(!password.value){
    ok = false;
    mostrarError(password.id, "Dato requerido");
}
if(!ok){
    return;
}

//Llamar a la api
    alert("Llamar a la api");

}

function mostrarError(id: string, texto: string) {
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

function limpiarError(id: string) {
  const divId = "error-" + id;
  const controlPorValidar = document.getElementById(id);
  const div = document.getElementById(divId);
  controlPorValidar.classList.remove("is-invalid");
  if (div) div.remove();
}