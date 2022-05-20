const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Movies API",
        version: '1.0.0',
        description: "NodeJS, Express with Swagger",
        contact: {
            name: "Kurinchilion"
        },
        servers: ["http://localhost:8081"]
      },
    },
    apis: ["server.js"],
  };

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  
/**
 * @swagger
 * /movies:
 *   get:
 *     description: Get all movies
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get('/movies', (req,res) => {
    res.send([
        {
            'id': 1,
            'name': 'Enter the Dragon'
        }
    ])
});

/**
 * @swagger
 * /movies:
 *   post:
 *     description: Get all movies
 *     parameters:
 *      - name: title
 *        description: title of the movies
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
 app.post('/movies', (req, res) => {
    res.status(201).send();
});

/**
 * @swagger
 * /movies:
 *    put:
 *      description: Use to return all movies
 *    parameters:
 *      - name: movie
 *        in: query
 *        description: Name of our movie
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
 app.put("/movies", (req, res) => {
    res.status(200).send("Successfully updated movies");
  });

app.listen(8081, () => {
    console.log("Server started. Listening on 8081");
});