class UpdateThing {
    constructor(thingRepository) {
        this.thingRepository = thingRepository;
    }

    async execute(id, thingData) {
        const thing = await this.thingRepository.findById(id);
        if (!thing) {
            throw new Error('Thing not found');
        }

        thing.update(thingData);
        return await this.thingRepository.update(id, thing);
    }
}

module.exports = UpdateThing;