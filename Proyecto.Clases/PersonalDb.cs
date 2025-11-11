using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using ProyectoClases;
namespace Proyecto.Clases;

public class PersonalDb
{


    private readonly IConfiguration config;
    private readonly IMongoCollection<Personal> collection;
    public PersonalDb(IConfiguration config)
    {
        this.config = config;
        var client = new MongoClient(config.GetConnectionString("MongoDb"));
        var db = client.GetDatabase("proyecto-escolar");
        this.collection = db.GetCollection<Personal>("personal");
    }
    public async Task<List<Personal>> Listar()
    {
        var filter = FilterDefinition<Personal>.Empty;
        var list = await this.collection.Find(filter).ToListAsync();
        return list;
    }
    public async Task<Personal>Obtener(string id)
    {
        var filter = Builders<Personal>.Filter.Eq(x => x.Id, id);
        var item = await this.collection.Find(filter).FirstOrDefaultAsync();
        return item;
    }
}
