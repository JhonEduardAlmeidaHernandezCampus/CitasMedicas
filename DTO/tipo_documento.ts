import { Expose, Transform } from "class-transformer";

export class tipoDocumento {

    @Expose({name: "Tipo_Documento"})
    tipdoc_id: number;

    @Expose({name: "Nombre_Documento"})
    tipdoc_nombre: string;    

    @Expose({name: "Abreviatura"})
    tipdoc_abreviatura: string; 
    
    constructor(data:Partial<tipoDocumento>){
        Object.assign(this, data)
        this.tipdoc_id = 0
        this.tipdoc_nombre = ""
        this.tipdoc_abreviatura = ""
    }
}