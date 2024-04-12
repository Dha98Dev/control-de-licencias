export interface Escuela{
    nombreEscuela:string,
    cct:string,
    municipio:string,
    localidad:string
}

export interface Respuesta {
    error:   boolean;
    mensaje: string;
    data:   Data[];
}
export interface RespuestaDatosEscuela {
    error:   boolean;
    mensaje: string;
    data:     DatosEscuela[];
}

export interface Data {
    nombre: string;
    apepat: string;
    apemat: string;
    curp:   string;
    rfc:    string;
    cct:    string;
    turno:  string;
    plazas: Plaza[];
}



export interface Plaza {
    nombre:        string;
    apepat:        string;
    apemat:        string;
    rfc:           string;
    curp:          string;
    cct:           string;
    nombreescuela: string;
    qnaini:        string;
    municipio:     string;
    localidad:     string;
    telct:         string;
    turno:         string;
    plaza:         string;
    funcion:       string;
}




export interface DatosEscuela {
    CV_CCT: string;
    C_NOMBRE: string;
    CV_TIPO: string;
    C_TIPO: string;
    CV_ADMINISTRATIVA: string;
    C_ADMINISTRATIVA: string;
    CV_ESTATUS: string;
    C_ESTATUS: string;
    F_FUNDACION: Date | null;
    ALTA_SISTEMA: Date | null;
    CAMBIO: string;
    CLAUSURA: Date | null;
    REAPERTURA: Date | null;
    REAPERTURA_CON_CAMBIO: Date | null;
    INMUEBLE_CV_INMUEBLE: string;
    INMUEBLE_C_VIALIDAD_PRINCIPAL: string;
    INMUEBLE_C_VIALIDAD_DERECHA: string;
    INMUEBLE_C_VIALIDAD_IZQUIERDA: string;
    INMUEBLE_C_VIALIDAD_POSTERIOR: string;
    INMUEBLE_N_EXTNUM: string;
    INMUEBLE_C_EXTALF: string;
    INMUEBLE_N_INTNUM: string;
    INMUEBLE_C_INTALF: string;
    INMUEBLE_CV_ENT: string;
    INMUEBLE_C_NOM_ENT: string;
    INMUEBLE_CV_MUN: string;
    INMUEBLE_C_NOM_MUN: string;
    INMUEBLE_CV_LOC: string;
    INMUEBLE_C_NOM_LOC: string;
    INMUEBLE_CV_AMBITO: string;
    INMUEBLE_C_NOM_AMBITO: string;
    INMUEBLE_CV_ASEN: string;
    INMUEBLE_C_NOM_ASEN: string;
    INMUEBLE_CV_TIPO_ASEN: string;
    INMUEBLE_C_TIPO_ASEN: string;
    INMUEBLE_CV_CODIGO_POSTAL: string;
    INMUEBLE_C_DESC_UBICACION: string | null;
    INMUEBLE_LATITUD: string;
    INMUEBLE_LONGITUD: string;
    SOSTENIMIENTO_CV_CONTROL: string;
    SOSTENIMIENTO_C_CONTROL: string;
    SOSTENIMIENTO_CV_SUBCONTROL: string;
    SOSTENIMIENTO_C_SUBCONTROL: string;
    SOSTENIMIENTO_CV_DEPENDENCIAN1: string;
    SOSTENIMIENTO_C_DEPENDENCIAN1: string;
    SOSTENIMIENTO_CV_DEPENDENCIAN2: string;
    SOSTENIMIENTO_C_DEPENDENCIAN2: string;
    SOSTENIMIENTO_CV_DEPENDENCIAN3: string;
    SOSTENIMIENTO_C_DEPENDENCIAN3: string | null;
    SOSTENIMIENTO_CV_DEPENDENCIAN4: string;
    SOSTENIMIENTO_C_DEPENDENCIAN4: string | null;
    SOSTENIMIENTO_CV_DEPENDENCIAN5: string;
    SOSTENIMIENTO_C_DEPENDENCIAN5: string | null;
    SOSTENIMIENTO_CV_SERVICIO: string;
    SOSTENIMIENTO_C_SERVICIO: string;
    DEPOPERATIVA_CV_DEPENDENCIAN1: string;
    DEPOPERATIVA_C_DEPENDENCIAN1: string;
    DEPOPERATIVA_CV_DEPENDENCIAN2: string;
    DEPOPERATIVA_C_DEPENDENCIAN2: string;
    DEPOPERATIVA_CV_DEPENDENCIAN3: string;
    DEPOPERATIVA_C_DEPENDENCIAN3: string;
    DEPOPERATIVA_CV_DEPENDENCIAN4: string;
    DEPOPERATIVA_C_DEPENDENCIAN4: string;
    DEPOPERATIVA_CV_DEPENDENCIAN5: string;
    DEPOPERATIVA_C_DEPENDENCIAN5: string | null;
    CONTACTO_CV_CARGO: string;
    CONTACTO_C_CARGO: string;
    CONTACTO_CV_TIPODIRECTOR: string;
    CONTACTO_C_TIPODIRECTOR: string;
    CONTACTO_C_ASOCIACION: string;
    CONTACTO_C_CURP: string;
    CONTACTO_C_RFC: string;
    CONTACTO_C_NOMBRE: string;
    CONTACTO_C_APELLIDO1: string;
    CONTACTO_C_APELLIDO2: string;
    CONTACTO_C_TELEFONO: string | null;
    CONTACTO_C_CELULAR: string;
    CONTACTO_C_EMAIL: string;
    CONTACTO_C_EXTENSION: string | null;
    CONTACTO_C_PWEB: string | null;
    SUPERVISION_CV_CCT: string | null;
    JEFSEC_CV_CCT: string | null;
    SERREG_CV_CCT: string | null;
    INSTITUCION_PLANTEL: string | null;
    C_TURNO_1: string;
    C_TURNO_2: string | null;
    C_TURNO_3: string | null;
    TIPONIVELSUB_CV_SERVICION1: string;
    TIPONIVELSUB_C_SERVICION1: string;
    TIPONIVELSUB_CV_SERVICION2: string;
    TIPONIVELSUB_C_SERVICION2: string;
    TIPONIVELSUB_CV_SERVICION3: string;
    TIPONIVELSUB_C_SERVICION3: string;
    C_SERVICIO_CAM: string | null;
    CARACTERISTCA_CV_CARACTERIZAN1: string;
    CARACTERISTCA_C_CARACTERIZAN1: string;
    CARACTERISTCA_CV_CARACTERIZAN2: string;
    CARACTERISTCA_C_CARACTERIZAN2: string;
}

export interface cacheStorage{
    byCatalogoCct: {
        Busqueda:string,
        Ccts:DatosEscuela[]
    }
}

export interface dataPruevaVacancia{
    nombre:string,
    cct:string,
    plaza:string,
    vigencia:string,
    funcion:string,
    status:string
}