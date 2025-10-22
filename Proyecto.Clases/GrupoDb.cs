using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MongoDB.Driver.Core.Compression;

namespace Proyecto.Clases;

public class GrupoDb
{


    private readonly IConfiguration config;
    private readonly IMongoCollection<Grupo> collection;
    public GrupoDb(IConfiguration config)
    {
        this.config = config;
        var client = new MongoClient(config.GetConnectionString("MongoDb"));
        var db = client.GetDatabase("proyecto-escolar");
        this.collection = db.GetCollection<Grupo>("grupos");
    }
    public async Task<List<Grupo>> Listar(int periodo)
    {
        var filter = Builders<Grupo>.Filter.Eq(x => x.Periodo, periodo);
        var list = await this.collection.Find(filter).ToListAsync();
        return list;
    }
}
