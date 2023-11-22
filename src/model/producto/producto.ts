import { IProducto } from "src/interfaces/interfaces";

export class Producto {

  constructor(public props: IProducto) { }
  
  get id(): number { return this.props.id}
  get id_producto(): number { return this.props.id_producto }
  get producto(): string { return this.props.producto }
  get gondola(): string { return this.props.gondola }
  get presentacion(): string { return this.props.presentacion }

  static fromJSON(producto: IProducto): Producto {    
    return new Producto(producto)
  }
}