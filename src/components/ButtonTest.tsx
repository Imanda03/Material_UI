import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ButtonTest = () => {
  return (
    <Stack spacing={4}>

    <Stack spacing={2} direction='row'>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="inherit">Inherit</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
    </Stack>

    <Stack display="block" spacing={3} direction='row'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant="contained" color="success" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" color="success" endIcon={<SendIcon/>}>Send</Button>
        <IconButton aria-aria-label="send" color='error'>
            <SendIcon/>
        </IconButton>
    </Stack>
    </Stack>
  )
}

export default ButtonTest