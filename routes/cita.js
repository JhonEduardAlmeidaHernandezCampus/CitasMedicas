import { Router } from "express";

let storageAcudiente = Router()

let storageCita = Router()
let json = []

storageCita.get("/", (req, res) => {
    try {        
        res.send(json)
    } catch (error) {
        res.send(error)
    }
})

storageCita.post("/", (req, res) => {
    try {

        let body = req.body
        let agregar = json.push(body)
        
        console.log(json);
        res.send("Agregado con exito")
    } catch (error) {
        res.send(error)
    }
})

export default storageCita;