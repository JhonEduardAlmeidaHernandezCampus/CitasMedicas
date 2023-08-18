import { Expose, Transform } from "class-transformer";

export class estadoCita {

    @Expose({name: "ID_Genero"})
    gen_id: number;

    @Expose({name: "Nombre_Genero"})
    gen_nombre: string;    

    @Expose({name: "Abreviatura"})
    gen_abreviatura: string; 
    
    constructor(data:Partial<estadoCita>){
        Object.assign(this, data)
        this.gen_id = 0
        this.gen_nombre = ""
        this.gen_abreviatura = ""
    }
}