import { Typography } from "@mui/material"


const MuiTypography = () => {
  return (
    <div>
        {/* gutterBottom gives margin to button */}
        <Typography variant="h1" gutterBottom> h1 Heading </Typography>
        <Typography variant="h2"> h2 Heading </Typography>
        <Typography variant="h3"> h3 Heading </Typography>
        <Typography variant="h4"> h4 Heading </Typography>
        <Typography variant="h5"> h5 Heading </Typography>
        <Typography variant="h6"> h6 Heading </Typography>
        <Typography variant="subtitle1"> Sub-Title 1 </Typography>
        <Typography variant="subtitle2"> Sub-Title 2 </Typography>
        <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel. </Typography>
        <Typography variant="body2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas. </Typography>
    </div>
  )
}

export default MuiTypography