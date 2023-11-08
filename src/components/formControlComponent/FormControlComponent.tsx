import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface FormControlComponentProps {
  setOption: (value: string) => void
  option: string
}

export const FormControlComponent = ({setOption, option}: FormControlComponentProps) => {
  return (
    <FormControl>
      <RadioGroup
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <FormControlLabel className='radioTxt' value="Sector" control={<Radio />} label="Sector" />
        <FormControlLabel className='radioTxt' value="Repositor" control={<Radio />} label="Repositor" />
      </RadioGroup>
    </FormControl>
  )
}