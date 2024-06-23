import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Pricing() {
  return (
    <Grid container sx={{
      minHeight: `calc(100vh - 68.5px)`,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Grid>
        <Typography sx={{
          fontSize:  '50px'
        }}>
          Pricing Page
        </Typography>
      </Grid>
    </Grid>
  )
}