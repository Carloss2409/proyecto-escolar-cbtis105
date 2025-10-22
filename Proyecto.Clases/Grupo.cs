using MongoDB.Bson.Serialization.Attributes;

namespace Proyecto.Clases;

public class Grupo
{
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string? Id { get; set; }
    [BsonElement("grupo")]
    public string Nombre { get; set; } = string.Empty;
    [BsonElement("semestre")]
    public int Semestre { get; set; }
    [BsonElement("carrera")]
    public string Carrera { get; set; } = string.Empty;
    [BsonElement("turno")]
    public string Turno { get; set; } = string.Empty;
    [BsonElement("periodo")]
    public int Periodo { get; set; }
}