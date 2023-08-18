import { Expose, Transform } from "class-transformer";

export class consultorio {

    @Expose({name: "Codigo_Consultorio"})
    cons_codigo: number;

    @Expose({name: "Nombre_Consultorio"})
    cons_nombre: string;    
    
    constructor(data:Partial<consultorio>){
        Object.assign(this, data)
        this.cons_codigo = 0
        this.cons_nombre = ""
    }
}