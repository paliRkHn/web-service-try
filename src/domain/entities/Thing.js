class Thing {
    constructor(id, name, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    static create(data) {
        const now = new Date();
        return new Thing(
            data.id,
            data.name,
            data.createdAt || now,
            data.updatedAt || now
        );
    }

    update(data) {
        if (data.name) this.name = data.name;
        this.updatedAt = new Date();
        return this;
    }
}

module.exports = Thing;