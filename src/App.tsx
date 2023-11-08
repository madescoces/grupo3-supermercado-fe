import './App.css'
import { Container } from '@mui/material'
import { Elemento } from './interfaces/interfaces';
import { FormControlComponent } from './components/formControlComponent/FormControlComponent';
import { useState } from 'react';
import { SelectComponent } from './components/select/SelectComponent';

function App() {
  const [option, setOption] = useState('Sector')

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

  const handleChange = (value: string) => {
    console.log("pepe", value)
    setOption(value)
  }

  return (
    <Container className='container'>
      <FormControlComponent setOption={handleChange} option={option} />
      { option === "Sector" ? (
        <SelectComponent lista={sectores} def={sectores[0].desc}/>
      ) : (
        <SelectComponent lista={repositores} def={repositores[0].desc}/>
      ) } 
    </Container>
  )
}

export default App
