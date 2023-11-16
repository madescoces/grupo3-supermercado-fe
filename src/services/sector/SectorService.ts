import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { ISector } from 'interfaces/interfaces'
import { Sector } from 'src/model/sector/sector'

const SectorService = () => {
  const getAll = async (): Promise<Sector[]> => {
    const response$ = await axios.get<ISector[]>(`${REST_SERVER_URL}/sectores`)
    const sectores = response$.data.map((sect) => Sector.fromJSON(sect))    
    return sectores
  }

  return {
    getAll
  }
}

export const sectorService = SectorService()