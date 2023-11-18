import axios from 'axios'
import { ISector } from 'interfaces/interfaces'
import { Sector } from 'src/model/sector/sector'

const SectoresService = () => {  
  const getAll = async (): Promise<Sector[]> => {
    const response$ = await axios.get<ISector[]>(`${import.meta.env.VITE_REST_SERVER_URL}/sectores`)
    const sectores = response$.data.map((sect) => Sector.fromJSON(sect))    
    return sectores
  }

  return {
    getAll
  }
}

export const sectorService = SectoresService()