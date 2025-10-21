using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Proyecto.Clases;

public class PeriodoSemestralDb
{
    private readonly IConfiguration config;
     private readonly IMongoCollection<PeriodoSemestral> coleccion;
    public PeriodoSemestralDb(IConfiguration config)
   
    {
        this.config = config;
        var client -new MongoClient(config.GetConnectionString("MongoDb"));
        var db client.GetDatebase("ProyectoEscolarCbtis105");
        this.collection = db.GetCollection<PeriodoSemestral>("periodos-semestrales");
   }


    public async Task<List<PeriodoSemestral> Listarperiodos()
    {

    }

      }