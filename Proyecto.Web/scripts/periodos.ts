type Periodo = {
            Id: string,
            Nombre: string,
            Anio: number,
            Periodo: number
           }

          async function cargarPeriodos(periodo: HTMLSelectElement){
    const url = "/api/periodos-semestrales";
    var respuesta = await fetch(url);
    if(respuesta.ok){
        //obtuvo los eleementos desde la peticion a la api
        const datos : Array<Periodo> = await respuesta.json();
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
            
          else{
            alert("Ocurrio un error al obtener los periodos semestrales");
        }

           } 