const Thing = require('../../../domain/entities/Thing');

class CreateThing {
    constructor(thingRepository) {
        this.thingRepository = thingRepository;
    }

    async execute(thingData) {
        const thing = Thing.create(thingData);
        return await this.thingRepository.create(thing);
    }
}

module.exports = CreateThing;