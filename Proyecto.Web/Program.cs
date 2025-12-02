using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews()
    .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

builder.Services.AddTransient<Proyecto.Clases.PeriodoSemestralDb>();
builder.Services.AddTransient<Proyecto.Clases.GrupoDb>();
builder.Services.AddTransient<Proyecto.Clases.PersonalDb>();
builder.Services.AddTransient<Proyecto.Clases.RegistroPetDb>();
builder.Services.AddTransient<Proyecto.Clases.UsuarioDb>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "jwt";
    options.DefaultChallengeScheme = "cookie";
})
.AddCookie("cookie", options =>
{
    options.LoginPath = "/usuarios/acceso";
})
.AddJwtBearer("jwt", options =>
{
    options.TokenValidationParameters = GetTokenValidations(builder.Configuration);
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var cookie = context.Request.Cookies["jwt"];
            if (!string.IsNullOrWhiteSpace(cookie))
            {
                context.Token = cookie;
            }
            return Task.CompletedTask;
        }
    };
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

TokenValidationParameters GetTokenValidations(IConfiguration config)
{
    return new TokenValidationParameters
    {
        ValidateAudience = true,
        ValidateIssuer = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = config["Jwt:Issuer"],
        ValidAudience = config["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]!))
    };
}


