import axios from 'axios'
import { IRepositor } from 'interfaces/interfaces'
import { Repositor } from 'model/repositor/repositor'

const RepositoresService = () => {
  const getAll = async (): Promise<Repositor[]> => {
    const response$ = await axios.get<IRepositor[]>(`${import.meta.env.VITE_REST_SERVER_URL}/repositores`)
    const repositores = response$.data.map((rep) => Repositor.fromJSON(rep))     
    return repositores
  }

  return {
    getAll
  }
}

export const repositorService = RepositoresService()