import express from "express";
import expensesRoutes from './routes/expenses.js';
import cors from "cors";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import {options} from './swaggerOptions.js'

const specs =  await swaggerJSDoc(options);

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(expensesRoutes)

app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(specs))

export default app;