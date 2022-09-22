import { 
  ButtonGroup,
  Button, 
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Grid,
  CircularProgress,
  Link as MaterialLink
 } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import {useGetProductsQuery}  from "../redux/productsApi";

export const Products = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();
  const [filter, setFilter] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
   if(isSuccess && data) {
    setFilter(data)
  }
}, [isSuccess, data]);

 const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%"}}>
      <CircularProgress color="secondary" sx={{height: "100%", width:"100%"}}/>
    </Box>
  )
 }

 const filterProduct = (cat1, cat2) => {
  const updatedList = isSuccess &&
  data && data.filter((x) => x.category === cat1 || x.category === cat2 );
  setFilter(updatedList)
 }

  const ShowProducts = () => {
    return (
      <>
        <ButtonGroup variant="text" aria-label="text button group" sx={{marginBottom: "1rem"}}>
          <Button color="secondary" onClick={() => 
            filterProduct("men's clothing", "women's clothing")}>All</Button>
          <Button color="secondary" onClick={() => filterProduct("men's clothing")}>Men</Button>
          <Button color="secondary" onClick={() => filterProduct("women's clothing")}>Women</Button>
        </ButtonGroup>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {isLoading && <Loading />}
        {filter.map((product) => {
          return (
            ((product.category === "men's clothing") || (product.category === "women's clothing")) && (
            <Grid item xs={4} sm={4} md={4} key={product.id}>
              <Card sx={{ maxWidth: {xs: "100%", sm: "345"} }}>
                <CardActionArea>
                  <MaterialLink component={RouterLink}  to={`/products/${product.id}`}>
                    <CardMedia component="img" height="300" image={product.image} alt={product.title} sx={{backgroundSize: "cover",padding: "1rem",opacity: "0.8",transition: "transform, all, 1s, ease-in-out",'&:hover': {opacity: "1" }}}/>
                    <CardContent sx={{textAlign: "center"}}>
                      <Typography gutterBottom variant="h5" component="div" color="secondary" sx={{fontSize: {xs: "1.4rem",sm: "1.1rem",md: "1.2rem",lg: "1.4rem"}}}>
                        {product.title.length > 28 ? product.title.slice(0,23) + "..." : product.title }
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${product.price}
                      </Typography>
                    </CardContent>  
                  </MaterialLink>
                </CardActionArea>
                <CardActions sx={{display:"flex", justifyContent: "center", marginBottom: "1rem"}}>
                  <Button variant="contained" size="medium" color="success" sx={{width: "80%"}} onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            )
            ) 
          })}
        </Grid>
      </>
    )
  }
 
  return (
    <>
      {isError && error.message}
      <ShowProducts sx={{height: "100%"}} />
    </>
  )
}
 
