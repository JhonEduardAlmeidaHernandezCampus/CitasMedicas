import { Expose, Transform } from "class-transformer";

export class especialidad {

    @Expose({name: "Codigo_Especialidad"})
    esp_id: number;

    @Expose({name: "Nombre_Especialidad"})
    esp_nombre: string;    
    
    constructor(data:Partial<especialidad>){
        Object.assign(this, data)
        this.esp_id = 0
        this.esp_nombre = ""
    }
}