import { Expose, Transform } from "class-transformer";

export class usuario {

    @Expose({name: "ID"})
    usu_id: number;

    @Expose({name: "Nombre"})
    usu_nombre: string;   
    
    @Expose({name: "Segundo_Nombre"})
    usu_segdo_nombre: string;    

    @Expose({name: "Primer_Apellido"})
    usu_primer_apellido_usuar: string;    

    @Expose({name: "Segundo_Apellido"})
    usu_segdo_apellido_usuar: string;    

    @Expose({name: "Telefono"})
    usu_telefono: string;    

    @Expose({name: "Direccion"})
    usu_direccion: string;    

    @Expose({name: "Email"})
    usu_email: string;    

    @Expose({name: "Nombre"})
    usu_tipodo: number;    

    @Expose({name: "Nombre"})
    usu_genero: number;   

    @Expose({name: "Nombre"})
    usu_acudiente: number;       
    
    constructor(data:Partial<usuario>){
        Object.assign(this, data)
        this.usu_id = 0
        this.usu_nombre = ""
        this.usu_segdo_nombre = ""
        this.usu_primer_apellido_usuar = ""
        this.usu_segdo_apellido_usuar = ""
        this.usu_telefono = ""
        this.usu_direccion = ""
        this.usu_email = ""
        this.usu_tipodo = 0
        this.usu_genero = 0
        this.usu_acudiente = 0
    }
}