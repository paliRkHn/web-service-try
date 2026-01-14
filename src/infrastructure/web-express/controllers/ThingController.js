class ThingController {
    constructor(useCases) {
        this.useCases = useCases;
    }

    async getAllThings(req, res, next) {
        try {
            const things = await this.useCases.getAllThings.execute();
            res.json({
                success: true,
                data: things
            });
        } catch (error) {
            next(error);
        }
    }
    
    async getThingById(req, res, next) {
        try {
            const { id } = req.params;
            const thing = await this.useCases.getThingById.execute(id);
            res.json({
                success: true,
                data: thing
            });
        } catch (error) {
            next(error);
        }
    }

    async createThing(req, res, next) {
        try {
            const thing = await this.useCases.createThing.execute(req.body);
            res.status(201).json({
                success: true,
                data: thing
            });
        } catch (error) {
            next(error);
        }
    }

    async updateThing(req, res, next) {
        try {
            const { id } = req.params;
            const thing = await this.useCases.updateThing.execute(id, req.body);
            res.json({
                success: true,
                data: thing
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteThing(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.useCases.deleteThing.execute(id);
            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ThingController;