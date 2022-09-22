import { Box, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
      <Box sx={{ width: "100%", height: "6.25rem",  backgroundColor: 'primary', borderTop: "2px solid #BEBBBB"}}>
        <Grid container direction="row" alignItems="center"  columnSpacing={3} sx={{ width: "100%", height: "100%", justifyContent: {xs: "center", sm: "flex-end"}}}>
          <Grid item>
            <Link href="https://www.facebook.com/" target="_blank" color="secondary">
              <FacebookIcon color="grey" sx={{'&:hover': { color: "#BEBBBB"}}}/>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com/" target="_blank" color="secondary">
              <InstagramIcon color="grey" sx={{'&:hover': {color: "#BEBBBB"}}}/>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/" target="_blank" color="secondary">
              <LinkedInIcon color="grey" sx={{'&:hover': {color: "#BEBBBB"}}}/>
            </Link>
          </Grid>
        </Grid>
      </Box>
    )
  }
