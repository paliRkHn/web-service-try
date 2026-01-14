class GetThingById {
    constructor(thingRepository) {
        this.thingRepository = thingRepository;
    }

    async execute(id) {
        const thing = await this.thingRepository.findById(id);
        if (!thing) {
            throw new Error('Thing not found');
        }
        return thing;
    }
}

module.exports = GetThingById;