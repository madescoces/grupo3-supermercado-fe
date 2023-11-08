import { FormControl, Select, MenuItem } from "@mui/material"
import { Elemento } from "../../interfaces/interfaces";
import { useState } from "react";

interface SelectComponentProps {
  lista: Elemento[],
  def: string
}

export const SelectComponent = ({lista, def}: SelectComponentProps) => {
  const [option, setOption] = useState<string>(def)

  const handleChange = (value: string) => {
    setOption(value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          defaultValue={def}
          value={option}
          onChange={(e) => handleChange(e.target.value)}
        >
          {lista.map(({id, desc}) => (
            <MenuItem key={id} value={desc}>
              {desc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}