using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers.Api;

[Route("api/pet/registro")]
public class RegistroPetController : ControllerBase{
    private readonly Proyecto.Clases.RegistroPetDb db;
    public RegistroPetController(Proyecto.Clases.RegistroPetDb db)
    {
        this .db = db;
    }

[HttpGet]

    public async Task <IActionResult> Listar(int periodo)
    {
            var list = await this.db.Listar(periodo);
        return Ok(list);
    }

}
