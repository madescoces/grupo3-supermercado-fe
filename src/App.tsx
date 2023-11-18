/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { FormControlComponent } from 'components/formControlComponent/FormControlComponent'
import { useState } from 'react';
import { SelectComponent } from 'components/select/SelectComponent'
import { DatagridComponent } from 'components/datagrid/datagridComponent'
import { useOnInit } from 'customHooks/hooks'
import { Sector } from 'model/sector/sector'
import { sectorService } from 'services/sectores/SectoresService'
import { Repositor } from 'model/repositor/repositor'
import { repositorService } from 'src/services/repositores/RepositoresService';

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
  const [radioOption, setRadioOption] = useState('Sector')
  const [selectOption, setSelectOption] = useState<string>(elements[0].name)
  
  useOnInit(() => getSectores())

  const getSectores = async () => {    
    try {
      const sectores$ = await sectorService.getAll()
      setElements(sectores$)
      setSelectOption(sectores$[0].name)      
    } catch (e) {
      setSelectOption(sectoresStub[0].name)
      console.error('Unreachable server error', e)
    }
  }

  const getRepositores = async () => {    
    try {
      const repositores$ = await repositorService.getAll()
      setElements(repositores$)
      setSelectOption(repositores$[0].name)      
    } catch (e) {
      setSelectOption(repositoresStub[0].name)
      console.error('Unreachable server error', e)
    }
  }

  const handleRadioChange = (value: string) => {    
    setRadioOption(value)
    value === "Sector" && getSectores()
    value === 'Repositor' && getRepositores()
    setSelectOption(elements[0].name)
  }

  const selectChange = (value: string) => {
    setSelectOption(value)
  }

  return (
    <div className='base'>
      <FormControlComponent setRadioOption={handleRadioChange} radioOption={radioOption} />
        {radioOption === "Sector" ? (
          <>            
            <SelectComponent elements={elements as Sector[]} setSelectOption={selectChange} selectOption={selectOption} />
            <DatagridComponent />
          </>
        ) : (
          <>
            <SelectComponent elements={elements as Repositor[]} setSelectOption={selectChange} selectOption={selectOption} />
            <DatagridComponent />
          </>
        )}
    </div>
  )
}