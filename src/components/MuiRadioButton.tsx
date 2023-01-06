import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const MuiRadioButton = () => {
  const [radioValue, setRadioValue] = React.useState("");
    console.log({radioValue})
  const handleEvent=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setRadioValue(event.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experienceGroup-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experienceGroup"
          aria-aria-labelledby="job-experienceGroup-label"
          value={radioValue}
          onChange={handleEvent}
          //To add in a row
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
