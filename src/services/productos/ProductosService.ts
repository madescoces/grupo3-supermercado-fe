import axios from 'axios'
import { IProducto } from 'interfaces/interfaces'
import { Producto } from 'src/model/producto/producto'

const ProductosService = () => {  
  const getBySelect = async (id:number, url:string): Promise<Producto[]> => {
    const response$ = await axios.get<IProducto[]>(`${import.meta.env.VITE_REST_SERVER_URL}${url}${id}`)
    return response$.data.map((prod) => Producto.fromJSON(prod))        
  }
  
  return {
    getBySelect
  }
}

export const productoService = ProductosService()