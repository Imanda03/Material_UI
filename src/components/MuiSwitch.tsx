import React from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChnage} />}
      />
    </Box>
  );
};

export default MuiSwitch;
