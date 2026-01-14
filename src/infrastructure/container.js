const InMemoryThingRepository = require('./repositories/InMemoryThingRepository');

const GetAllThings = require('../application/use-cases/thing/GetAllThings');
const GetThingById = require('../application/use-cases/thing/GetThingById');
const CreateThing = require('../application/use-cases/thing/CreateThing');
const UpdateThing = require('../application/use-cases/thing/UpdateThing');
const DeleteThing = require('../application/use-cases/thing/DeleteThing');

const ThingController = require('./web-express/controllers/ThingController');

function createContainer() {
    // Repository
    const thingRepository = new InMemoryThingRepository();

    // Use Cases
    const useCases = {
        getAllThings: new GetAllThings(thingRepository),
        getThingById: new GetThingById(thingRepository),
        createThing: new CreateThing(thingRepository),        
        updateThing: new UpdateThing(thingRepository),
        deleteThing: new DeleteThing(thingRepository)
    };

    // Controller
    const thingController = new ThingController(useCases);

    return { 
        thingController,
        useCases,
        repositories: { thingRepository }
    };
}

module.exports = createContainer;