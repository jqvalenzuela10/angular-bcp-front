export interface Transaccion{
    cod_tran:number,
    monto:number,
    cod_destino_cuenta:string,
    descripcion:string,
    fecha:Date,
    hora:string,
    codCuenta:string,
    tipoTransaccion:string,
    mensaje:string,
    movimientoColor:boolean
}