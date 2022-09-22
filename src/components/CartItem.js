import React from 'react'
import { 
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  IconButton
 } from '@mui/material';
 import CloseIcon from '@mui/icons-material/Close';
 import AddIcon from '@mui/icons-material/Add';
 import RemoveIcon from '@mui/icons-material/Remove';
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({product}) {
  const dispatch = useDispatch()

  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: {xs: "column", md: "row"}, width: "100%", padding: "30px", marginBottom: "1rem", marginRight: "2rem" }}>
        <Box sx={{width: '100%', display: {xs: "flex", md: "none"}, justifyContent: "flex-end"}}>
          <IconButton sx={{display: {xs: "initial", md: "none"}, height: "100%"}}  onClick={() => dispatch(removeItem(product.id))}>
            <CloseIcon/>
          </IconButton>
        </Box>
        <Box  sx={{ width: "50%"}}>
          <CardMedia component="img" sx={{ width: "40%", height: "auto", overflow: "hidden"}} image={product.image} alt={product.title}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: {xs: "100%", md: "50%"}}}>
          <CardContent sx={{ padding: "1rem 0", border: "1px solid secondary"}}>
            <Typography component="div" variant="h5">
              ${product.price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {product.title}
            </Typography>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <IconButton sx={{display: "flex", alignItems: "center", paddingLeft: "0"}} onClick={() => dispatch(decrementQuantity(product.id))}>
                <RemoveIcon sx={{display: "flex", alignItems: "center"}} />
              </IconButton>
              <Typography variant="h5" color="text.secondary" component="div">
                Qty: {product.quantity}
              </Typography>
              <IconButton onClick={() => dispatch(incrementQuantity(product.id))}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Box>
        <IconButton sx={{display: {xs: "none", md: "initial"}, height: "100%"}} onClick={() => dispatch(removeItem(product.id))}>
          <CloseIcon />
        </IconButton>
      </Card>
    </>
  )
}

export default CartItem