const ThingRepository = require('../../domain/repositories/ThingRepository');
const Thing = require('../../domain/entities/Thing');
const crypto = require('crypto');

class InMemoryThingRepository extends ThingRepository {
    constructor() {
        super();
        this.things = new Map();
        this.initialMockData();
    }

    initialMockData() {
        const mockThings = [
            { id: crypto.randomUUID(), name: 'Thing 1', description: 'This is the first thing.' },
            { id: crypto.randomUUID(), name: 'Thing 2', description: 'This is the second thing.' },
            { id: crypto.randomUUID(), name: 'Thing 3', description: 'This is the third thing.' }
        ];

        mockThings.forEach(thing => {
            this.things.set(thing.id, {
            ...thing,
            createdAt: new Date(),
            updatedAt: new Date()
            })
        });
    }

    async findAll() {
        return Array.from(this.things.values()).map(data =>
            new Thing(data.id, data.name, data.createdAt, data.updatedAt)
        );
    }

    async findById(id) {
        const data = this.things.get(id);
        if (!data) return null;
        return new Thing(data.id, data.name, data.createdAt, data.updatedAt);
    }

    async create(thing) {
        const id = crypto.randomUUID();
        const newThing = { 
            id,
            name: thing.name,
            createdAt: thing.createdAt || new Date(),
            updatedAt: thing.updatedAt || new Date()
        };
        this.things.set(id, newThing);
        return new Thing(newThing.id, newThing.name, newThing.createdAt, newThing.updatedAt);
    }

    async update(id, thing) {
        const updateData = {
            id,
            name: thing.name,
            createdAt: thing.createdAt,
            updatedAt: thing.updatedAt || new Date()
        };
        this.things.set(id, updateData);
        return new Thing(updateData.id, updateData.name, updateData.createdAt, updateData.updatedAt);
    }
    
    async delete(id) {
        this.things.delete(id);
    }
}

module.exports = InMemoryThingRepository;