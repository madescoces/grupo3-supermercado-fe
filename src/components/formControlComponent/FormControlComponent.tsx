import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { SelectType } from "src/interfaces/interfaces";

interface FormControlComponentProps {
  setRadioOption: (value: SelectType) => void
  radioOption: string
}

export const FormControlComponent = ({radioOption, setRadioOption}: FormControlComponentProps) => {
  return (
    <FormControl className="radio">
      <RadioGroup
        className="radio__group"
        value={radioOption}
        onChange={(e) => setRadioOption(e.target.value as SelectType)}
      >
        <FormControlLabel className='radio__text' value="Sector" control={<Radio />} label="Sector" />
        <FormControlLabel className='radio__text' value="Repositor" control={<Radio />} label="Repositor" />
      </RadioGroup>
    </FormControl>
  )
}