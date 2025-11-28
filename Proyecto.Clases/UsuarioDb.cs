using System.Text.RegularExpressions;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Proyecto.Clases;

public class UsuarioDb
{
        private readonly IMongoCollection<Usuario> collection;

public UsuarioDb (IConfiguration config)
    {
         var client = new MongoClient(config.GetConnectionString("MongoDb"));
        var db = client.GetDatabase("proyecto-escolar");
        this.collection = db.GetCollection<Usuario>("usuarios");
    }

    public async Task<Usuario?> ObtenerUsuario(string correo )
    {
        var filter = Builders<Usuario>.Filter.Regex(x => x.Correo, new Regex(correo, RegexOptions.IgnoreCase));
        var list = await this.collection.Find(filter).ToListAsync();


        return list?.FirstOrDefault();
    }
}