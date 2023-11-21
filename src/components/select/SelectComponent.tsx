import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Sector } from "model/sector/sector"
import { Repositor } from "model/repositor/repositor"

interface SelectComponentProps {
  elements: Sector[] | Repositor[]
  setSelectOption: (element: Sector | Repositor) => void
  selectOption: Sector | Repositor
}

export const SelectComponent = ({ elements, selectOption, setSelectOption }: SelectComponentProps) => {
  
  const handleChange = (e:SelectChangeEvent<string>) => {
    const selected = elements.find((element) => element.name === e.target.value) || null
    selected && setSelectOption(selected)
  }
  
  return (
    <>
      <FormControl className="select">
        <Select
          value={selectOption.name}
          defaultValue={selectOption.name}
          onChange={handleChange}
        >
          {elements.map(({name}, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>      
      </FormControl>
    </>
  )
}