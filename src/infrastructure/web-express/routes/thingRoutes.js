const express = require('express');

function createThingRoutes(controller) {
    const router = express.Router();

    router.get('/', async (req, res, next) => controller.getAllThings(req, res, next)); // GET /api/things
    router.get('/:id', async (req, res, next) => controller.getThingById(req, res, next)); // GET /api/things/:id
    router.post('/', async (req, res, next) => controller.createThing(req, res, next)); // POST /api/things
    router.put('/:id', async (req, res, next) => controller.updateThing(req, res, next)); // PUT /api/things/:id
    router.delete('/:id', async (req, res, next) => controller.deleteThing(req, res, next)); // DELETE /api/things/:id

    return router;
}

module.exports = createThingRoutes;