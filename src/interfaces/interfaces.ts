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
  id_producto: number
  producto: string
  gondola: string
  presentacion: string
}

export type TextAlign = "left" | "center" | "right" | "justify" | "inherit" | undefined

export enum SelectType{
  Sector = "Sector",
  Repositor = "Repositor",
}

export enum SelectTypeURL {
  Sector = "/productos/sector/",
  Repositor = "/productos/repositor/"
}
export interface ITitle {
  title: string
  aligment: TextAlign
}
export interface ITableList {
  data: Producto[]  
  titles: ITitle[]
}