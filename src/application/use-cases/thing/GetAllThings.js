class GetAllThings {
  constructor(thingRepository) {
    this.thingRepository = thingRepository;
  }

  async execute() {
    return await this.thingRepository.findAll();
  }
}

module.exports = GetAllThings;