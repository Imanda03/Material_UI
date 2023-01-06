import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  return (
    <div>
      <Stack spacing={3} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>

      <Stack spacing={3} direction="row">
        <TextField
          label="Small Secondary"
          color="secondary"
          size="small"
          required
        />
        <TextField
          label="Small Secondary"
          color="secondary"
          size="small"
          type="password"
          helperText="Donot share your password with anyone"
        />
      </Stack>

      <Stack spacing={3} direction="row">
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>,}} />
        <TextField label="Weight" size="small"  InputProps={{endAdornment: <InputAdornment position="end">Kg</InputAdornment>}}/>
      </Stack>
    </div>
  );
};

export default MuiTextField;
