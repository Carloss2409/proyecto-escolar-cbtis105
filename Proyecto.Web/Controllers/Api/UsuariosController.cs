using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers.Api;
[Route ("api/usuarios")]
public class UsuariosController : ControllerBase
{
    private readonly Proyecto.Clases.UsuarioDb db;

    public UsuariosController(Proyecto.Clases.UsuarioDb db)
    {
        this.db = db;
    }

[HttpPost("validar")] 
    public async Task<IActionResult> ValidarUsuario([FromForm]string correo, [FromForm]string password)
        {
        var item = await this.db.ObtenerUsuario(correo);
        if(item != null)
        {
            if(item.Password == password)
            {
                return Ok(item);
            }
           
        }
                return BadRequest("Usuario o contraseña incorrecta");
    }
    
}