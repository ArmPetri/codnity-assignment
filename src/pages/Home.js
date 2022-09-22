import { 
  Box, 
  ImageList, 
  ImageListItem, 
  CircularProgress, 
  Container, 
  Typography, 
  Button, 
  Link as MaterialLink
 } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {useGetProductsQuery}  from "../redux/productsApi";

export function Home() {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();

  const Loading = () => {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%"}}>
          <CircularProgress color="secondary" sx={{height: "100%", width:"100%"}}/>
      </Box>
      </>
    )
   }

 const ImageGrid = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column",justifyContent: {xs: "space-around", sm: "center"},alignItems: "center",margin: "0 auto"}}>
      <Typography variant="h1" color="white" sx={{width: "100%", textAlign: "center", display: {xs: "visible", sm: "none"}, backgroundColor: "#29335C", fontSize:{xs: "2rem"}, padding: "0.5rem"}}>
          New Arrivals
      </Typography>
      <ImageList cols={5} sx={{ overflow: 'hidden', opacity: "0.7"}}>
        {data.map((product) => {
          return ( 
            ((product.category === "men's clothing") || (product.category === "women's clothing")) && (
            <ImageListItem key={product.image}>
              <img src={`${product.image}?w=164&h=164&fit=crop&auto=format`} srcSet={`${product.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={product.title} loading="lazy"/>
            </ImageListItem>
            )
          )  
        })}
      </ImageList>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: {xs: "static", sm:  "absolute"}, top: "0", left: "0", width: "100%", height: {sm: "100%"}}}>
        <Typography variant="h1" color="secondary" sx={{display: {xs: "none", sm: "initial"}, backgroundColor: "white", padding:"2rem"}}>
          New Arrivals
        </Typography>
        <MaterialLink component={RouterLink} to="/products" underline="none" sx={{width: {xs: "100%", sm: "10rem",md: "15rem"}}}>
          <Button variant="contained" color="success"  sx={{width: {xs: "100%",sm: "10rem",md: "15rem"
          },marginTop: "2rem", height: "3rem", '&:hover': {backgroundColor: "primary.light", color: "white"},textDecoration: "none"}}>
              Shop Now
          </Button>
        </MaterialLink>
      </Box>
    </Box>
  )
 }

  return (
    <>
      <Container sx={{padding: "2rem", height: {xs: "80vh"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
        {isLoading && <Loading />}
        {isError && error.message}
        {isSuccess &&
          data &&
            <ImageGrid />}
      </Container>
   </>
  );
}
