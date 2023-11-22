import { IBigProducto } from "src/interfaces/interfaces";

export class BigProducto {

  constructor(public props: IBigProducto) { }

  get fecha(): string { return this.props.fecha }
  get id_producto(): number { return this.props.id_producto }
  get producto(): string { return this.props.producto }
  get descripcion(): string { return this.props.descripcion }
  get id_reemplazo(): number { return this.props.id_reemplazo }
  get presentacion(): string { return this.props.presentacion }
  get fila(): string { return this.props.fila }
  get gondola(): string { return this.props.gondola }
  get sector(): string { return this.props.sector }
  get repositor(): string { return this.props.repositor }
  get empresa(): string { return this.props.empresa }
  get domicilio_empresa(): string { return this.props.domicilio_empresa }

  static fromJSON(producto: IBigProducto): BigProducto {
    return new BigProducto(producto)
  }
}




