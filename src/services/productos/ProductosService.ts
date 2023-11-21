import axios from 'axios'
import { IProducto } from 'interfaces/interfaces'
import { Producto } from 'src/model/producto/producto'

const ProductosService = () => {  
  const getBySector = async (idSector:number): Promise<Producto[]> => {
    const response$ = await axios.get<IProducto[]>(`${import.meta.env.VITE_REST_SERVER_URL}/productos/sector/${idSector}`)
    return response$.data.map((sect) => Producto.fromJSON(sect))        
  }

  const getByRepositor = async (idRepositor:number): Promise<Producto[]> => {
    const response$ = await axios.get<IProducto[]>(`${import.meta.env.VITE_REST_SERVER_URL}/productos/repositor/${idRepositor}`)
    return response$.data.map((rep) => Producto.fromJSON(rep))        
  }

  return {
    getBySector,
    getByRepositor
  }
}

export const productoService = ProductosService()