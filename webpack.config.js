module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}