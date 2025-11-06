using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Proyecto.Clases;

public class RegistroPetDb
{
    private readonly IMongoCollection<RegistroPet> collection;
     public RegistroPetDb(IConfiguration config)
    {
        
    var client = new MongoClient(config.GetConnectionString("MongoDb"));
    var db = client.GetDatabase("proyecto-escolar");
    this.collection = db.GetCollection<RegistroPet>("registro-pet");
    }
    public async Task<List<RegistroPet>> Listar(int periodo)
    {
        var filter = Builders<RegistroPet>.Filter.Eq(x => x.PeriodoSemestral, periodo);
        var list = await this.collection.Find(filter).ToListAsync();
        return list;
    }
}