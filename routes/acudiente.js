import { Router } from "express";

let storageAcudiente = Router()

storageAcudiente.get("/", (req, res) => {
    try {
        let json = {
            ID: 1,
            Nombre: "Jhon",
            Telefono: "+57 3002224799", 
            Direccion: "Calle 58 # 12 - 45"
        }
        
        res.send(json)
    } catch (error) {
        res.send(error)
    }
})

export default storageAcudiente;