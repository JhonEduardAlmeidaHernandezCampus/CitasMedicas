import dotenv from 'dotenv'
import express from 'express'

import storageAcudiente from './routes/acudiente.js';
import storageCita from './routes/cita.js';

dotenv.config("../")
let app = express()
app.use(express.json())

app.use("/acudiente", storageAcudiente)
app.use("/cita", storageCita)

let config = JSON.parse(process.env.MY_CONFIG)
app.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))