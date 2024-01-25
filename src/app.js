import express from 'express';
import morgan from 'morgan';
import routes from './routes/product.routes';

const app = express();

app.set('port', 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/test", routes);

export default app;