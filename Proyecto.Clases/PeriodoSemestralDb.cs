using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Proyecto.Clases;

public class PeriodoSemestralDb
{
    private readonly IConfiguration config;
     private readonly IMongoCollection<PeriodoSemestral> collection;
    public PeriodoSemestralDb(IConfiguration config)
   
    {
        this.config = config;
        var client = new MongoClient(config.GetConnectionString("MongoDb"));
    var db = client.GetDatabase("proyecto-escolar");
    this.collection = db.GetCollection<PeriodoSemestral>("periodos-semestrales");
   } 


    public async Task<List<PeriodoSemestral>> Listarperiodos()
    {
    FilterDefinition<PeriodoSemestral> filter = FilterDefinition<PeriodoSemestral>.Empty;
    var list = await this.collection.Find(filter).ToListAsync();
    return list;
    }

      }