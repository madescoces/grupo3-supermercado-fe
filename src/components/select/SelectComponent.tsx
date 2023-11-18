import { FormControl, Select, MenuItem } from "@mui/material"
import { Sector } from "model/sector/sector"

interface SelectComponentProps {
  elements: Sector[]
  setSelectOption: (value: string) => void
  selectOption: string
}

export const SelectComponent = ({ elements, selectOption, setSelectOption }: SelectComponentProps) => {
  return (
    <>
      <FormControl className="select">
        <Select
          value={selectOption}
          defaultValue={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
        >
          {elements.map(({name, id}, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>      
      </FormControl>
    </>
  )
}