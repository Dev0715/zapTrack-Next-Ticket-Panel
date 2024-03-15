import express from 'express'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { dbConnect } from "./services/db.js"
import userRoutes from './routes/user-routes.js'
import { notFound, errorHandler } from "./middleware/index.js";
// import adminRoutes from './routes/admin-routes.js'

const app = express()
dotenv.config()

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        return false;
    }

    return compression.filter(req, res);
};

app.use(compression({
    filter: shouldCompress,
    threshold: 512
}));
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, "/../public")));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Admin Routes
// app.use('/api', adminRoutes);

// User Routes
app.use('/api', userRoutes)
app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});
app.use(notFound);
app.use(errorHandler);

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

dbConnect(DB_URL);

app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
})