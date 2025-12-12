using MongoDB.Bson.Serialization.Attributes;

namespace Proyecto.Clases;

public class Patrocinador
{
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("nombre")]
    public string Nombre { get; set; } = string.Empty;

    [BsonElement("domicilio")]
    public string Domicilio { get; set; } = string.Empty;

    [BsonElement("tipoApoyo")]
    public string TipoApoyo { get; set; } = string.Empty;
}
