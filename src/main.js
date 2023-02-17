import express from "express";
import tatuador from "./routes/tatuador.js";
import cors from "cors"

const app = express();



const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Tattoo API" })
    })

    app.use(
        tatuador
    );
}

const corsConfig = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}

app.use(express.json(),
    cors(corsConfig)
)
routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running in http://localhost:${port}`));