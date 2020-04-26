import express from 'express';
import uuid from "uuid/v1";
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    console.error(origin);
    callback(null, true);
  }
}));

const htmlPath = path.join(__dirname, "..", "html");

app.use(express.static(htmlPath));
app.get("/status", (req, res) => res.status(200).send(uuid()));

export default app.listen(process.env.PORT || 8081);
