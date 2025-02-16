import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
// Route imports
// congigration

dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('home route');
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server running');
});
