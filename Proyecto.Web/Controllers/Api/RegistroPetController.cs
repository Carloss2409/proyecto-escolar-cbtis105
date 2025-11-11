using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers.Api;

[ApiController]
[Route("api/pet/registro")]
public class RegistroPetController : ControllerBase{
    private readonly Proyecto.Clases.RegistroPetDb db;
    private readonly Proyecto.Clases.PersonalDb personalDb;
    private readonly Proyecto.Clases.GrupoDb grupoDb;
    public RegistroPetController(Proyecto.Clases.RegistroPetDb db,
    Proyecto.Clases.PersonalDb personalDb, Proyecto.Clases.GrupoDb grupoDb)
    {
        this.db = db;
        this.personalDb = personalDb;
        this.grupoDb = grupoDb;
    }

    [HttpGet]

    public async Task<IActionResult> Listar(int periodo)
    {
        var list = await this.db.Listar(periodo);
        return Ok(list);
    }
    [HttpPost]
    public async Task<IActionResult> Guardar(Proyecto.Clases.GuardarRegistro model)
    {
        var personal = await this.personalDb.Obtener(model.IdPersonal);
        var grupo = await this.grupoDb.Obtener(model.IdGrupo);

        var registro = new Proyecto.Clases.RegistroPet();
        registro.Alumno = model.Alumno;
        registro.Fecha = DateTime.Now;
        registro.Grupo = grupo.Semestre.ToString() + grupo.Nombre;
        registro.NumControl = model.NumControl;
        registro.PeriodoSemestral = model.AnioPeriodo;
        registro.Peso = model.Peso;
        registro.RegistradoPor = personal.Nombre;

        this.db.Insertar(registro);
        
        return Ok();
    }
}
