using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers.Api;

[ApiController]
[Route("api/grupos")]

public class GruposController : ControllerBase
{
    private readonly Proyecto.Clases.GrupoDb db;
    public GruposController(Proyecto.Clases.GrupoDb db)
    {
        this.db = db;
    }
    [HttpGet]
    public async Task<IActionResult> Listar(int periodo)
    {
        var list = await this.db.Listar(periodo);
        return Ok(list);
    }
}