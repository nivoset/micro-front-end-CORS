import express from 'express';
import path from 'path';

const app = express();

const htmlPath = path.join(__dirname, "..", "html");
app.use(express.static(htmlPath));

export default app.listen(process.env.PORT || 8080);
