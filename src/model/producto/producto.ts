import { IProducto } from "src/interfaces/interfaces";

export class Producto {

  constructor(public props: IProducto) { }

  get productoId(): number { return this.props.id_producto }
  get productoNombre(): string { return this.props.producto }
  get gondolaNombre(): string { return this.props.gondola }
  get presentacionDesc(): string { return this.props.presentacion }

  static fromJSON(producto: IProducto): Producto {
    return new Producto(producto)
  }
}