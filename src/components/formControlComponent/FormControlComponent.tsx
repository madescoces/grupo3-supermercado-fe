import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface FormControlComponentProps {
  setRadioOption: (value: string) => void
  radioOption: string
}

export const FormControlComponent = ({radioOption, setRadioOption}: FormControlComponentProps) => {
  return (
    <FormControl className="radio">
      <RadioGroup
        value={radioOption}
        onChange={(e) => setRadioOption(e.target.value)}
      >
        <FormControlLabel className='radio__text' value="Sector" control={<Radio />} label="Sector" />
        <FormControlLabel className='radio__text' value="Repositor" control={<Radio />} label="Repositor" />
      </RadioGroup>
    </FormControl>
  )
}