console.log("Typescript en ejecución");

function saludar(nombre: string) {
    return "Hola " + nombre;
}

document.addEventListener("DOMContentLoaded", () => {
    alert(saludar("Carlos"));
});