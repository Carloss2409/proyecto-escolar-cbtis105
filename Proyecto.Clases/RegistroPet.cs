using MongoDB.Bson.Serialization.Attributes;

namespace Proyecto.Clases;

public class RegistroPet
{
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string? Id { get; set; } 
   [BsonElement("periodo_semestral")]
    public int PeriodoSemestral { get; set; }
    [BsonElement("num_control")]
    public string NumControl { get; set; } = string.Empty;
    [BsonElement("alumno")]
    public string Alumno { get; set; } = string.Empty;
    [BsonElement("grupo")]
    public string Grupo { get; set; } = string.Empty;
    [BsonElement("fecha")]
    public DateTime Fecha { get; set; }
    [BsonElement("registrado_por")]
    public string RegistradoPor { get; set; } = string.Empty;
    [BsonElement("peso")]
   public decimal Peso { get; set; }
    
}