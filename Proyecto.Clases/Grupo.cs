using MongoDB.Bson.Serialization.Attributes;

namespace Proyecto.Clases;

public class Grupo
{
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)] 
    public string? Id { get; set; }
}