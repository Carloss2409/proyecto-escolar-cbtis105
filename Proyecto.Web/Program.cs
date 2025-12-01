using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews()
.AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

builder.Services.AddTransient<Proyecto.Clases.PeriodoSemestralDb>();
builder.Services.AddTransient<Proyecto.Clases.GrupoDb>();
builder.Services.AddTransient<Proyecto.Clases.PersonalDb>();
builder.Services.AddTransient<Proyecto.Clases.RegistroPetDb>();
builder.Services.AddTransient<Proyecto.Clases.UsuarioDb>();

builder.Services.AddAuthentication( options =>
{
    options.DefaultAuthenticateScheme = "jwt";
    options.DefaultAuthenticateScheme =  "cookie";
}).AddCookie("cookie", options =>
{
    options.LoginPath = "/usuarios/acceso";
}).AddJwtBearer("jwt", options =>
{
    options.TokenValidationParameters = GetTokenValidations(builder.Configuration);
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

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
        ValidIssuer = config.GetValue<string>("Jwt:Issuer"),
        ValidAudience = config.GetValue<string>("Jwt:Audience"),
        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(config.GetValue<string>("Jwt:Key")!))


    };
}
