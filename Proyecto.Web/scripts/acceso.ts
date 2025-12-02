document.addEventListener("DOMContentLoaded", () =>{
const boton = document.getElementById ("btn-accesar");
boton.addEventListener("click", accesar);


});

 async function accesar(){
const correo = document.getElementById ("correo") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const mensaje = document.getElementById("mensaje") as HTMLDivElement;

let ok = true;

limpiarError(correo.id);
limpiarError(password.id);
mensaje.innerText = "";

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

const form = new FormData();
form.append("correo", correo.value);
form.append("password", password.value);
//Llamar a la api
const response = await fetch("/api/usuarios/validar", {
  method: "post",
  body: form
});

    if(response.ok){
      location.href = "/pet/registro";  
    }
else{
mensaje.innerText = await response.text();
}
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