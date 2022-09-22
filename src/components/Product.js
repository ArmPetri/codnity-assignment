import { 
  Box,
  CircularProgress,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button
} from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import {useGetProductsQuery}  from "../redux/productsApi";

const Product = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();
  const {id} = useParams()
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isSuccess && data) {
      setProduct(data.find((each) => each.id === parseInt(id)));
   }
 }, [isSuccess, data, id]);

  const ShowProduct = () => {
    return (
      <>
      {product && 
        <Card sx={{ display: 'flex', flexDirection:{xs: "column", md: "row"}, width: "100%", padding: {xs: "none", sm:"2rem"}}}>
          <Box sx={{ width: {xs: "100%",sm: "40%"}}}>
            <CardMedia
              component="img"sx={{ width: {xs: "100%",sm: "100%"},transition: "transform 0.3s, 0.5s ease-in-out",opacity: "0.9",overflow: "hidden",'&:hover': {opacity: "1",transform: "scale(1.1)"},padding: {xs: "1rem", sm:"none"} }}image={product.image}alt={product.title}/>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: {xs: "none", md: "3rem"}, width: {xs: "100%",md: "60%"}}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" color="secondary">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" >
                {product.description}
              </Typography>
              <Typography variant="h5" color="secondary" component="div" pt={2} sx={{fontWeight: "bold"}}>
                ${product.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="contained" color="success" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Card>}
      </>
    )
  }
  
  const Loading = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%"}}>
          <CircularProgress color="secondary" sx={{height: "100%", width:"100%"}}/>
        </Box>
      )
    }

  return (
    <Container sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "50px", width: "100%", minHeight:"calc(100vh - 10rem)"}}>
      {isLoading && <Loading />}
      {isError && error.message}
      {isSuccess && data &&
      <ShowProduct sx={{flex: "1"}} />}
    </Container>
  )
}

export default Product