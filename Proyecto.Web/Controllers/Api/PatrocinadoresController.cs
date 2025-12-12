using Microsoft.AspNetCore.Mvc;
using Proyecto.Clases;

namespace Proyecto.Web.Controllers
{
    public class PatrocinadoresController : Controller
    {
        private readonly PatrocinadorDb db;

        public PatrocinadoresController(PatrocinadorDb db)
        {
            this.db = db;
        }

        public async Task<IActionResult> Index()
        {
            var lista = await db.ListarPatrocinadores();
            return View(lista);
        }
    }
}
