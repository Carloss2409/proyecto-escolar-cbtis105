const path = require("path");

module.exports = {
mode: "development",
entry: {
    "listado-registros" : "./scripts/listado-registros.ts",
    "periodos": "./scripts/periodos.ts",
    "registro": "./scripts/registro.ts"
},
output:{
    path: path.resolve(__dirname, "./wwwroot/js"),
    filename: "[name].js"
},
resolve: {
extensions: [".ts", ".js"]

},
module: {
    rules: [
        {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }
    ]

}
};