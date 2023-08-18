import { Expose, Transform } from "class-transformer";

export class cita {

    @Expose({name: "ID_Cita"})
    cit_codigo: number;

    @Expose({name: "Fecha_Cita"})
    cit_fecha: string;    

    @Expose({name: "Estado_Cita"})
    cita_estadoCita: number; 

    @Expose({name: "Medico"})
    cita_medico: number; 

    @Expose({name: "Usuario"})
    cita_datosUsuario: number; 
    
    constructor(data:Partial<cita>){
        Object.assign(this, data)
        this.cit_codigo = 0
        this.cit_fecha = ""
        this.cita_estadoCita = 0
        this.cita_medico = 0
        this.cita_datosUsuario = 0
    }
}