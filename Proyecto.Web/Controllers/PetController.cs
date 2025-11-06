using Microsoft.AspNetCore.Mvc;

public class PetController : Controller
{
public IActionResult Index()
    {
        return View();
    }
    public IActionResult Registro()
    {
        return View();
    }
}