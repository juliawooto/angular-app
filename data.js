module.exports = function () {
    return {
        items: [
            { id: 1, name: "Start Application", category: "Command",
                description: "ng serve --port 3000 --open" },
            { id: 2, name: "Start REST API", category: "Command",
                    description: "npm run json" },
            { id: 3, name: "Root/angular.son", category: "Json",
                    description: "has default project name, CSS file " },
            { id: 4, name: "Root/package.json", category:  "Json",
                description: "defines all library versions and script commands." },
            { id: 5, name: "Root/tsconfig.json", category:  "Json",
                description: "has baseURL"  },
            { id: 6, name: "Root/tsconfig.app.json", category:  "Json",
                description: "has the configuration for the TypeScript compiler" }
        ]
    }
}
