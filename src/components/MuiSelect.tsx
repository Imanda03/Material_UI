import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
    const [country, setCountry] = React.useState<string []>([]);
    console.log({country});
  const handleEvent =(event: React.ChangeEvent<HTMLInputElement>)=>{
    //   setCountry(event.target.value as string)    for single choose
    
    //for multiple
    const value = event.target.value;
    setCountry(typeof value === 'string'? value.split(',') : value)
    };
  return (
    <div>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleEvent}
          fullWidth
          SelectProps={{
            multiple: true
          }}
          size='small'
          color="warning"
          helperText='Please select your country'
        >
          <MenuItem value="np">Nepal</MenuItem>
          <MenuItem value="aus">Austraia</MenuItem>
          <MenuItem value="us">USA</MenuItem>
        </TextField>
      </Box>
    </div>
  );
};

export default MuiSelect;
