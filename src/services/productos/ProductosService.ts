import axios from 'axios'
import { IProducto } from 'interfaces/interfaces'
import { BigProducto } from 'src/model/producto/bigproducto'
import { Producto } from 'src/model/producto/producto'

const ProductosService = () => {  
  const getBySelect = async (id:number, url:string): Promise<Producto[]> => {    
    const response$ = await axios.get<IProducto[]>(`${import.meta.env.VITE_REST_SERVER_URL}${url}${id}`)
    return response$.data.map((prod) => Producto.fromJSON(prod))        
  }

  const getBigProducto = async (id:number, url:string): Promise<BigProducto> => {
    const response$ = await axios.get<BigProducto>(`${import.meta.env.VITE_REST_SERVER_URL}${url}${id}`)
    return BigProducto.fromJSON(response$.data)
  }
  
  return {
    getBySelect,
    getBigProducto
  }
}

export const productoService = ProductosService()