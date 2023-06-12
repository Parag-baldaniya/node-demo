const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Albiorix',
        version: "1.0.0",
        description: "This is Albiorix api documentation",
    },
    // host: `${process.env.API_HOST}:${process.env.PORT}`,
    host: `localhost:5000`,
    schemas: ["http", "https"],
    basePath: "/v1/"
}

const options = {
    swaggerDefinition,
    apis: ["./api/users/users.route.js", "./src/utils/swagger.yml"],
}

module.exports = swaggerJSDoc(options);