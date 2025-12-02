using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Proyecto.Web.Controllers.Api;
[Route ("api/usuarios")]
public class UsuariosController : ControllerBase
{
    private readonly Proyecto.Clases.UsuarioDb db;
    private readonly IConfiguration config;

    public UsuariosController(Proyecto.Clases.UsuarioDb db, IConfiguration config)
    {
        this.db = db;
        this.config = config;
    }

[HttpPost("validar")] 
    public async Task<IActionResult> ValidarUsuario([FromForm]string correo, [FromForm]string password)
        {
        var item = await this.db.ObtenerUsuario(correo);
        if(item == null || item.Password != password)
        {
            return BadRequest("Usuario o contraseña incorrecta");
           
        }
            
  string token = this.GenerarToken(item);
  this.Response.Cookies.Append("jwt", token);
  return Ok(new
  {
      Token = token
  });
    }

    private string GenerarToken(Clases.Usuario usuario)
    {
      List<Claim> claims = new List<Claim>();
      claims.Add(new Claim(ClaimTypes.Name, usuario.Nombre));
      claims.Add(new Claim(JwtRegisteredClaimNames.Sub, usuario.Correo));

      var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(this.config.GetValue<string>("Jwt:key")!));
      var credenciales = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
      var token = new JwtSecurityToken(
        issuer: this.config.GetValue<string>("Jwt:Issuer"),
        audience: this.config.GetValue<string>("Jwt:Audience"),
        claims: claims,
        signingCredentials: credenciales,
        expires: DateTime.UtcNow.AddHours(2)
      );

   var tokenHandler = new JwtSecurityTokenHandler();
   return tokenHandler.WriteToken(token);
    }
}