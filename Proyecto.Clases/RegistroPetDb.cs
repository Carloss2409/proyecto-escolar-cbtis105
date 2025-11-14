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
    public void Insertar(Proyecto.Clases.RegistroPet item)
    {
        this.collection.InsertOne(item);
    }


    public async Task<decimal> SumatoriaPorPeriodo(int periodo)
    {
      var filter = Builders<RegistroPet>.Filter.Eq(x => x.PeriodoSemestral, periodo);
        var list = await this.collection.Find(filter).ToListAsync();
        return list.Sum(x => x.Peso);
    }

 public async Task<List<TotalGrupo>>ListarPorGrupo(int periodo)
    {
      var filter = Builders<RegistroPet>.Filter.Eq(x => x.PeriodoSemestral, periodo);
        var list = await this.collection.Find(filter).ToListAsync();
     var ListadoPorGrupo = list.GroupBy(x => x.Grupo).Select(x => new TotalGrupo
       {
           Grupo = x.Key,
           Total = x.Sum(y => y.Peso)
       }).ToList();
       return ListadoPorGrupo;
    }

}