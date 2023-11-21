export interface ISector {
  id: number,
  name: string
}

export interface IRepositor {
  id: number,
  name: string
}

export interface IProducto {
  sectorId: number,
  productoId: number,
  productoNombre: string,
  gondolaNombre: string,
  presentacionDesc: string,
}
