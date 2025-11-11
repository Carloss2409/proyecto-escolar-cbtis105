document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton-registrar");
  const periodo = document.getElementById("periodo-semestral") as HTMLSelectElement; 

  boton.addEventListener("click", registrar);
  periodo.addEventListener("change", cargarGrupos);

  cargarPeriodos(periodo);
  cargarPersonal();
});

function registrar() {
  const periodo = document.getElementById("periodo-semestral") as HTMLSelectElement; 
  const grupo = document.getElementById("grupo") as HTMLSelectElement;
  const registrado = document.getElementById("registrado-por") as HTMLSelectElement;
  const numControl = document.getElementById("num-control") as HTMLInputElement;
  const alumno = document.getElementById("alumno") as HTMLInputElement;
  const peso = document.getElementById("peso") as HTMLInputElement;

  limpiarError(periodo.id);
  limpiarError(grupo.id);
  limpiarError(registrado.id);
  limpiarError(numControl.id);
  limpiarError(alumno.id);
  limpiarError(peso.id);

  let ok = true;

  if (!alumno.value || alumno.value.trim() === "") {
    mostrarError(alumno.id, "Dato requerido");
    ok = false;
  }

  if (!numControl.value || numControl.value.trim() === "") {
    mostrarError(numControl.id, "Dato requerido");
    ok = false;
  } else if (numControl.value.trim().length !== 14) {
    mostrarError(numControl.id, "Debe capturar 14 dígitos");
    ok = false;
  }

  if (!peso.value || peso.value.trim() === "") {
    mostrarError(peso.id, "Dato requerido");
    ok = false;
  } else {
    const pesoConNumero = parseFloat(peso.value);
    if (pesoConNumero <= 0) {
      mostrarError(peso.id, "El peso no puede ser cero o negativo");
      ok = false;
    }
  }

  if (periodo.value === "0") {
    mostrarError(periodo.id, "Dato requerido");
    ok = false;
  }

  if (grupo.value === "0") {
    mostrarError(grupo.id, "Dato requerido");
    ok = false;
  }

  if (registrado.value === "0") {
    mostrarError(registrado.id, "Dato requerido");
    ok = false;
  }

  if (!ok) return;

  guardaRegistro();
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

async function cargarGrupos() {
  const periodo = document.getElementById("periodo-semestral") as HTMLSelectElement; 
  const url = "/api/grupos?periodo=" + periodo.value;
  const respuesta = await fetch(url);
  const grupo = document.getElementById("grupo") as HTMLSelectElement;
  grupo.innerHTML = "";

  const opcionDefault = document.createElement("option");
  opcionDefault.value = "0";
  opcionDefault.text = "(Seleccione un grupo)";
  grupo.appendChild(opcionDefault);

  if (respuesta.ok) {
    const datos: Array<Grupo> = await respuesta.json();
    datos.map(g => {
      const opcion = document.createElement("option");
      opcion.value = g.Id;
      opcion.text = g.Semestre + g.Nombre + " - " + g.Carrera + " " + g.Turno;
      grupo.appendChild(opcion);
    });
  } else {
    alert("Error al obtener los datos de los grupos");
  }
}

async function cargarPersonal() {
  const url = "/api/personal";
  const respuesta = await fetch(url);
  if (respuesta.ok) {
    const datos: Array<Personal> = await respuesta.json();
    const personal = document.getElementById("registrado-por") as HTMLSelectElement;
    personal.innerHTML = "";

    const opcionDefault = document.createElement("option");
    opcionDefault.value = "0";
    opcionDefault.text = "(Seleccione un personal)";
    personal.appendChild(opcionDefault);

    datos.map(P => {
      const opcion = document.createElement("option");
      opcion.value = P.Id;
      opcion.text = P.Nombre + " - " + P.Cargo;
      personal.appendChild(opcion);
    });
  } else {
    alert("Ocurrió un error al obtener el personal");
  }
}

async function guardaRegistro() {
  const periodo = document.getElementById("periodo-semestral") as HTMLSelectElement; 
  const grupo = document.getElementById("grupo") as HTMLSelectElement;
  const registrado = document.getElementById("registrado-por") as HTMLSelectElement;
  const numControl = document.getElementById("num-control") as HTMLInputElement;
  const alumno = document.getElementById("alumno") as HTMLInputElement;
  const peso = document.getElementById("peso") as HTMLInputElement;

  const registro: GuardarRegistro = {
    Alumno: alumno.value,
    AnioPeriodo: parseInt(periodo.value),
    IdGrupo: grupo.value,
    IdPersonal: registrado.value,
    NumControl: numControl.value,
    Peso: parseFloat(peso.value)
  };

  console.log("Objeto a guardar:", registro);
  const url = "/api/pet/registro";
  const respuest = await fetch(url, {
    body : JSON.stringify(registro),
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    }
  });

  if (respuest.ok) {

    alert("Registro guardado correctamente");
    location.href = "/pet";
  }
  else{
    alert("Ocurrió un error al guardar el registro");
  }
}

type Grupo = {
  Id: string;
  Nombre: string;
  Semestre: number;
  Carrera: string;
  Turno: string;
  Periodo: number;
};

type Personal = {
  Id: string;
  Nombre: string;
  Cargo: string;
};

type GuardarRegistro = {
  AnioPeriodo: number;
  IdGrupo: string;
  IdPersonal: string;
  NumControl: string;
  Alumno: string;
  Peso: number;
};
