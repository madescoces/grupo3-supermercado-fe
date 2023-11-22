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
import { SelectType, SelectTypeURL } from './interfaces/interfaces'
import { CustomModal } from './components/modal/CustomModal'
import { BigProducto } from './model/producto/bigproducto'

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

const bigProductoStub: BigProducto = new BigProducto({
  fecha: '',
  id_producto: 0,
  producto: '',
  descripcion: '',
  id_reemplazo: 0,
  presentacion: '',
  fila: '',
  gondola: '',
  sector: '',
  repositor: '',
  empresa: '',
  domicilio_empresa: '',
})

export default function App() {
  const [elements, setElements] = useState<Sector[] | Repositor[]>(sectoresStub)
  const [products, setProducts] = useState<Producto[]>([])
  const [bigProducto, setBigProducto] = useState<BigProducto>(bigProductoStub)
  const [radioOption, setRadioOption] = useState('Sector')
  const [selectOption, setSelectOption] = useState<Sector | Repositor>(elements[0])  
  const [isModalOpen, setIsModalOpen] = useState(false)

  useOnInit(() => handleRadioChange(SelectType.Sector))

  const getComboData = async (tipo: SelectType) => {
    try {
      const data = tipo === SelectType.Sector ? await sectorService.getAll() : await repositorService.getAll()
      setElements([...data])
      setSelectOption(data[0])
      getProductos(1, tipo === SelectType.Sector ? SelectTypeURL.Sector : SelectTypeURL.Repositor)
    } catch (e) {
      tipo === SelectType.Sector ? setSelectOption(sectoresStub[0]) : setSelectOption(repositoresStub[0])
      console.error('Unreachable server error', e)
    }
  }

  const getProductos = async (id: number, type: SelectTypeURL) => {
    try {
      const productos$ = await productoService.getBySelect(id, type)
      setProducts([...productos$])      
    } catch (e) {
      console.error('Unreachable server error', e)
    }
  }

  const getProductoById = async (id: number) => {
    try {
      const bigProducto$ = await productoService.getBigProducto(id, SelectTypeURL.BigProducto)
      setBigProducto(bigProducto$)
    } catch (e) {
      console.error('Unreachable server error', e)
    }
  }

  const handleRadioChange = (type: SelectType) => {
    setRadioOption(type)
    console.log('llego')
    getComboData(type)
  }

  const handleSelectedOption = (value: Sector | Repositor) => {
    setSelectOption(value)
    radioOption === 'Sector'
      ? getProductos(value.id, SelectTypeURL.Sector)
      : getProductos(value.id, SelectTypeURL.Repositor)
  }

  const handleRowClick = (id: number) => {    
    getProductoById(id)
    setIsModalOpen(true)
  }

  return (
    <>
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
        <DatagridComponent products={products} handleRowClick={(id) => handleRowClick(id)} />
      </div>
      <CustomModal producto={bigProducto} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
