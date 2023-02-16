import express from "express";
import swaggeUi from 'swagger-ui-express'
import yaml from 'yaml'
import fs from 'fs'
import { router } from "./routes/routes";
import bodyParser from "body-parser"
import swaggerAutogen from 'swagger-autogen';
const file = fs.readFileSync('../api/doc.yaml', 'utf-8')
const swaggerYAMLtoJSON= yaml.parse(file)

const app = express()
const port = 5000
app.use(bodyParser.json())
app.use('/docs', swaggeUi.serve, swaggeUi.setup(swaggerYAMLtoJSON))
app.use(router)

app.listen(port, () => console.log(`Server is running on PORT ${port}`));