import { Expose, Transform } from "class-transformer";

export class acudiente {

    @Expose({name: "ID_Acudiente"})
    acu_codigo: number;

    @Expose({name: "Nombre"})
    acu_nombreCompleto: string;    

    @Expose({name: "Telefono"})
    acu_telefono: string; 

    @Expose({name: "Direccion"})
    acu_direccion: string; 
    
    constructor(data:Partial<acudiente>){
        Object.assign(this, data)
        this.acu_codigo = 0
        this.acu_nombreCompleto = ""
        this.acu_telefono = ""
        this.acu_direccion = ""
    }
}