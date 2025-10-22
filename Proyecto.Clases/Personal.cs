using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ProyectoClases
{
    public class Personal
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("nombre")]
        public string Nombre { get; set; } = string.Empty;

        [BsonElement("cargo")]
        public string Cargo { get; set; } = string.Empty;

    }
}
