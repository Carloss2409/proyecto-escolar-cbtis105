using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers.Api;

[ApiController]
[Route("api/periodos-semestrales")]
public class PeriodosSemestralesController : ControllerBase

{
    private readonly Proyecto.Clases.PeriodoSemestralDb db;
    public PeriodosSemestralesController(Proyecto.Clases.PeriodoSemestralDb db)
    {
        this.db = db;

    }
    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var list = await this.db.Listarperiodos();
        return Ok(list);
    }
}