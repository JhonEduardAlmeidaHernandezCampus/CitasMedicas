import { Expose, Transform } from "class-transformer";

export class estadoCita {

    @Expose({name: "Estado_Cita"})
    estcita_id: number;

    @Expose({name: "Estado_Nombre"})
    estcita_nombre: string;    
    
    constructor(data:Partial<estadoCita>){
        Object.assign(this, data)
        this.estcita_id = 0
        this.estcita_nombre = ""
    }
}