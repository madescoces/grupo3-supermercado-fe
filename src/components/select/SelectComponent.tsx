import { FormControl, Select, MenuItem } from "@mui/material"
import { Elemento } from "../../interfaces/interfaces"

interface SelectComponentProps {
  lista: Elemento[]
  setSelectOption: (value: string) => void
  selectOption: string
}

export const SelectComponent = ({ lista, selectOption, setSelectOption }: SelectComponentProps) => {
  return (
    <FormControl className="select">
      <Select
        value={selectOption}
        defaultValue={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        {lista.map(({ id, desc }) => (
          <MenuItem key={id} value={desc}>
            {desc}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}