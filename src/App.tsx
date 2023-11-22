/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { FormControlComponent } from 'components/formControlComponent/FormControlComponent'
import { useState } from 'react'
import { SelectComponent } from 'components/select/SelectComponent'
import { DatagridComponent } from 'components/datagrid/datagridComponent'
import { useOnInit } from 'customHooks/hooks'
import { Sector } from 'model/sector/sector'
import { sectorService } from 'services/sectores/SectoresService'
import { Repositor } from 'model/repositor/repositor'
import { repositorService } from 'src/services/repositores/RepositoresService'
import { productoService } from './services/productos/ProductosService'
import { Producto } from './model/producto/producto'

const sectoresStub: Array<Sector> = [
  new Sector({ id: 1, name: 'carnes' }),
  new Sector({ id: 2, name: 'lacteos' }),
  new Sector({ id: 3, name: 'bebidas' }),
  new Sector({ id: 4, name: 'verduras' }),
]

const repositoresStub: Array<Repositor> = [
  new Repositor({ id: 1, name: 'juan' }),
  new Repositor({ id: 2, name: 'pepe' }),
  new Repositor({ id: 3, name: 'pablin' }),
  new Repositor({ id: 4, name: 'bruno' }),
]

export default function App() {
  const [elements, setElements] = useState<Sector[] | Repositor[]>(sectoresStub)
  const [products, setProducts] = useState<Producto[]>([])
  const [radioOption, setRadioOption] = useState('Sector')
  const [selectOption, setSelectOption] = useState<Sector | Repositor>(elements[0])

  useOnInit(() => handleRadioChange('Sector'))

  const getSectores = async () => {
    try {
      const sectores$ = await sectorService.getAll()
      setElements([...sectores$])
      setSelectOption(sectores$[0])
      getProductosBySector(1)
    } catch (e) {
      setSelectOption(sectoresStub[0])
      console.error('Unreachable server error', e)
    }
  }

  const getRepositores = async () => {
    try {
      const repositores$ = await repositorService.getAll()
      setElements([...repositores$])
      setSelectOption(repositores$[0])
      getProductosByRepositor(1)
    } catch (e) {
      setSelectOption(repositoresStub[0])
      console.error('Unreachable server error', e)
    }
  }

  const getProductosBySector = async (id: number) => {
    try {
      const productos$ = await productoService.getBySector(id)
      setProducts([...productos$])
    } catch (e) {
      console.error('Unreachable server error', e)
    }
  }

  const getProductosByRepositor = async (id: number) => {
    try {
      const productos$ = await productoService.getByRepositor(id)
      setProducts([...productos$])
    } catch (e) {
      console.error('Unreachable server error', e)
    }
  }

  const handleRadioChange = (value: string) => {
    setRadioOption(value)
    if (value === 'Sector') {
      getSectores()
    } else if (value === 'Repositor') {
      getRepositores()
    }
  }

  const handleSelectedOption = (value: Sector | Repositor) => {
    setSelectOption(value)
    radioOption === 'Sector' ? getProductosBySector(value.id) : getProductosByRepositor(value.id)
  }

  return (
    <div className="base">
      <div className="navbar">
        <FormControlComponent setRadioOption={handleRadioChange} radioOption={radioOption} />
        {radioOption === 'Sector' ? (
          <SelectComponent
            elements={elements as Sector[]}
            setSelectOption={handleSelectedOption}
            selectOption={selectOption}
          />
        ) : (
          <SelectComponent
            elements={elements as Repositor[]}
            setSelectOption={handleSelectedOption}
            selectOption={selectOption}
          />
        )}
      </div>
      <DatagridComponent products={products} />
    </div>
  )
}
