using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Proyecto.Clases;

public class PatrocinadorDb
{
    private readonly IConfiguration config;
    private readonly IMongoCollection<Patrocinador> collection;

    public PatrocinadorDb(IConfiguration config)
    {
        this.config = config;

        var client = new MongoClient(config.GetConnectionString("MongoDb"));
        var db = client.GetDatabase("proyecto-escolar");

        this.collection = db.GetCollection<Patrocinador>("patrocinadores");
    }

    public async Task<List<Patrocinador>> ListarPatrocinadores()
    {
        var filter = FilterDefinition<Patrocinador>.Empty;
        return await this.collection.Find(filter).ToListAsync();
    }

    public async Task CrearPatrocinador(Patrocinador patrocinador)
    {
        await this.collection.InsertOneAsync(patrocinador);
    }

    public async Task<Patrocinador?> ObtenerPatrocinador(string id)
    {
        return await this.collection.Find(p => p.Id == id).FirstOrDefaultAsync();
    }

    public async Task ActualizarPatrocinador(Patrocinador patrocinador)
    {
        await this.collection.ReplaceOneAsync(p => p.Id == patrocinador.Id, patrocinador);
    }

    public async Task EliminarPatrocinador(string id)
    {
        await this.collection.DeleteOneAsync(p => p.Id == id);
    }
}
