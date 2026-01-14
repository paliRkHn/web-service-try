class DeleteThing {
    constructor(thingRepository) {
        this.thingRepository = thingRepository;
    }

    async execute(id) {
        const thing = await this.thingRepository.findById(id);
        if (!thing) {
            throw new Error('Thing not found');
        }

        await this.thingRepository.delete(id);
        return { message: 'Thing deleted successfully' };
    }
}

module.exports = DeleteThing;