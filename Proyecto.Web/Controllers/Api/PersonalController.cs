using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.Serialization.Serializers;
namespace Proyecto.Web.Controllers.Api;

[ApiController]
[Route("api/personal")]
public class PersonalController : ControllerBase

{
    private readonly Proyecto.Clases.PersonalDb db;
    public PersonalController(Proyecto.Clases.PersonalDb db)
    {
        this.db = db;

    }
    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var list = await this.db.Listar();
        return Ok(list);
    }
}