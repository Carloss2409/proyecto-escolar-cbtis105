using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Web.Controllers;

public class UsuariosController : Controller
{
    public IActionResult Acceso()
    {
        return View();
    }
}