using MongoDB.Bson.Serialization.Attributes;

namespace Proyecto.Clases;

public class PeriodoSemestral
{
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)] 
    public string? Id { get; set; }

    [BsonElement("nombre")]
    public string Nombre { get; set; } = string.Empty;

    [BsonElement("anio")]

    public DateTime Anio { get; set; }

    [BsonElement("periodo")]
    public DateTime Periodo { get; set; }

}
    