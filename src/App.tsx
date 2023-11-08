import './App.css'
import { Elemento } from './interfaces/interfaces';
import { FormControlComponent } from './components/formControlComponent/FormControlComponent';
import { useState } from 'react';
import { SelectComponent } from './components/select/SelectComponent';
import { DatagridComponent } from './components/datagrid/datagridComponent';

const sectores: Elemento[] = [
  {id: 1, desc: 'carnes'},
  {id: 2, desc: 'lacteos'},
  {id: 3, desc: 'bebidas'},
  {id: 4, desc: 'verduras'},
]

const repositores: Elemento[] = [
  {id: 1, desc: 'juan'},
  {id: 2, desc: 'pepe'},
  {id: 3, desc: 'pablin'},
  {id: 4, desc: 'bruno'},
]

export default function App(){
  const [radioOption, setRadioOption] = useState('Sector')
  const [selectOption, setSelectOption] = useState<string>(sectores[0].desc)  

  const handleRadioChange = (value: string) => {    
    setRadioOption(value)
    value === "Sector" ? setSelectOption(sectores[0].desc) : setSelectOption(repositores[0].desc)
  }

  const selectChange = (value: string) => {    
    setSelectOption(value)
  }

  return (
    <div className='base'>
      <FormControlComponent setRadioOption={handleRadioChange} radioOption={radioOption} />
      { radioOption === "Sector" ? (
        <>
          <SelectComponent lista={sectores} setSelectOption={selectChange} selectOption={selectOption} />          
          <DatagridComponent />
        </>
      ) : (
        <>
          <SelectComponent lista={repositores} setSelectOption={selectChange} selectOption={selectOption}/>
          <DatagridComponent />
        </>
      ) } 
    </div>
  )
}