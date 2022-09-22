import { 
  AppBar,
  Toolbar,
  Typography,
  Stack, 
  IconButton
 } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from "react-router-dom";

export function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
          E-Store
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <Link to="/">
              Home
            </Link>
            <Link to="/store">
             Store
            </Link>
        </Stack>
        <IconButton>
          <ShoppingCartTwoToneIcon color="grey" sx={{'&:hover': {color: "black",opacity: [0.9, 0.8, 0.7],},}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}