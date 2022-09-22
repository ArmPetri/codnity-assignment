import { 
  AppBar,
  Toolbar,
  Typography,
  Stack, 
  IconButton,
  Badge,
  Link as MaterialLink 
} from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

export function Header() {
  const cart = useSelector((state) => state.cart.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <AppBar position="static" sx={{marginBottom:"2rem", height: "3.75rem"}}>
      <Toolbar>
        <MaterialLink component={RouterLink} to="/" underline="none" sx={{textDecoration: "none"}}>
          <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}  underline="none" color="secondary">
            E-Store
          </Typography>
        </MaterialLink>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 3, paddingRight: {sm: "30%"}, justifyContent:{xs: "center", sm: "flex-end"}}}>
          <MaterialLink component={RouterLink} to="/" underline="none" color="secondary" sx={{'&:hover': {color: "#BEBBBB"}}}>
            Home
          </MaterialLink>
          <MaterialLink component={RouterLink} to="/products" underline="none" color="secondary" sx={{'&:hover': {color: "#BEBBBB"}}}>
            Products
          </MaterialLink>
        </Stack>
        <MaterialLink component={RouterLink} to="/cart">
          <IconButton >
            <Badge badgeContent={getTotalQuantity() || null} color="success">
              <ShoppingCartTwoToneIcon color="secondary" sx={{color: "#29335C",'&:hover': {color: "#BEBBBB"}}}/>
            </Badge>
          </IconButton>
        </MaterialLink>
      </Toolbar>
    </AppBar>
  )
}