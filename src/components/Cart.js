import CartItem from './CartItem';
import { 
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Container,
  CardActions,
  Divider
 } from '@mui/material';
import { useSelector } from 'react-redux'

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const getTotal = () => {
    let total = 0

    cart.forEach(item => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }

  return (
    <>
      <Container sx={{minHeight:"calc(100vh - 10rem)", display: "flex", flexDirection: { xs: "column", md: "row"}, marginBottom: "2rem"}}>
        <Box sx={{width: "100%"}}>
          <Card  sx={{marginBottom: "1rem"}}>
            <CardContent>
              <Typography variant="h4" component="div">My Bag</Typography>
            </CardContent>
          </Card>
            {cart.map((product) => (
              <CartItem product={product} key={product.id}/>
            ))}
        </Box>
        <Card sx={{ minWidth: "30%", marginLeft: {xs: "none", md: "2rem"}, marginBottom: "1rem"}}>
          <CardContent>
            <Typography variant="h4" sx={{paddingBottom: "1rem"}} component="div">
              Total
            </Typography>
            <Divider />
            <Typography variant="h5" sx={{paddingTop: "1rem"}}>
              Subtotal: ${getTotal()}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Standard Delivery (Free)
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success" sx={{width: "90%", margin: "auto"}}>Checkout</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default Cart