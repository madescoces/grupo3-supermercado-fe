import { Producto } from "src/model/producto/producto"

export interface ISector {
  id: number
  name: string
}

export interface IRepositor {
  id: number
  name: string
}

export interface IProducto {    
  id: number
  id_producto: number
  producto: string
  gondola: string
  presentacion: string
}

export interface IBigProducto {
  fecha: string
  id_producto: number
  producto: string
  descripcion: string
  id_reemplazo: number
  presentacion: string
  fila: string
  gondola: string
  sector: string
  repositor: string
  empresa: string
  domicilio_empresa: string
}

export type TextAlign = "left" | "center" | "right" | "justify" | "inherit" | undefined

export enum SelectType{
  Sector = "Sector",
  Repositor = "Repositor",
}

export enum SelectTypeURL {
  Sector = "/productos/sector/",
  Repositor = "/productos/repositor/",
  BigProducto = "/productos/producto-full/"
}
export interface ITitle {
  title: string
  aligment: TextAlign
}
export interface ITableList {
  data: Producto[]  
  titles: ITitle[]
}