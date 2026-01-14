require('dotenv').config();

const createContainer = require('./src/infrastructure/container');
const createServer = require('./src/infrastructure/web-express/server');

const PORT = process.env.PORT || 3000;

const container = createContainer();
const app = createServer(container);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});