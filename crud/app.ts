import express from "express";
import { routes } from "./routes/routes";
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(routes)



app.listen(port, () => console.log(`Server is running on PORT ${port}`));