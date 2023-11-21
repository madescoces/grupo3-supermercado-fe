import { IProducto } from "src/interfaces/interfaces";


export class Producto {

  constructor(public props: IProducto) { }

  get sectorId(): number { return this.props.sectorId }
  get productoId(): number { return this.props.productoId }
  get productoNombre(): string { return this.props.productoNombre }
  get gondolaNombre(): string { return this.props.gondolaNombre }
  get presentacionDesc(): string { return this.props.presentacionDesc }

  static fromJSON(producto: IProducto): Producto {
    return new Producto(producto)
  }
}