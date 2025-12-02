using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

public class PetController : Controller
{
public IActionResult Index()
    {
        return View();
    }
   [Authorize]
    public IActionResult Registro()
    {
        return View();
    }
}