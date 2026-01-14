const express = require('express');
const cors = require('cors');

const createThingRoutes = require('./routes/thingRoutes');
const errorHandler = require('./middleware/errorHandler');

function createServer(container) {
    const app = express();

    //middleware
    app.use(cors());
    app.use(express.json());

    //routes
    app.use('/api/things', createThingRoutes(container.thingController));

    app.use(errorHandler);

    return app;
}

module.exports = createServer;