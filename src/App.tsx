/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { FormControlComponent } from 'components/formControlComponent/FormControlComponent'
import { useState } from 'react';
import { SelectComponent } from 'components/select/SelectComponent'
import { DatagridComponent } from 'components/datagrid/datagridComponent'
import { useOnInit } from 'customHooks/hooks'
import { Sector } from 'model/sector/sector'
import { sectorService } from 'services/sector/SectorService'
import { Repositor } from 'model/repositor/repositor'

const sectoresStub: Array<Sector> = [
  new Sector({ id: 0, desc: 'carnes' }),
  new Sector({ id: 1, desc: 'lacteos' }),
  new Sector({ id: 2, desc: 'bebidas' }),
  new Sector({ id: 3, desc: 'verduras' }),
]

const repositoresStup: Array<Repositor> = [
  new Repositor({ id: 0, desc: 'juan' }),
  new Repositor({ id: 1, desc: 'pepe' }),
  new Repositor({ id: 2, desc: 'pablin' }),
  new Repositor({ id: 3, desc: 'bruno' }),
]

export default function App() {
  const [elements, setElements] = useState<Sector[]>(sectoresStub)
  const [radioOption, setRadioOption] = useState('Sector')
  const [selectOption, setSelectOption] = useState<string>(elements[0].desc)

  useOnInit(() => getSectores())

  const getSectores = async () => {
    const sectores$ = await sectorService.getAll()
    setSelectOption(sectores$[0].desc)
    setElements(sectores$)
  }

  const handleRadioChange = (value: string) => {
    setRadioOption(value)
    value === "Sector" ? setSelectOption(elements[0].desc) : setSelectOption(elements[0].desc)
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