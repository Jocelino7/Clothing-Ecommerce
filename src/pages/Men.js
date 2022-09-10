import { Box, Typography, Button, useMediaQuery, Grid, Card, CardActions, CardContent} from '@mui/material';
import { createTheme } from '@mui/material/styles';




const Men = () => {
    const theme = createTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const primary = "#FFBC0D"
    const secondary = "#FFF"

    return (
        <>
         {matches ?
                <Typography variant="h1" sx={{ fontSize: "1.3rem", fontWeight: "400", margin: "2rem 1rem" }} >
                    Men

                </Typography>
                :
                <Typography variant="h3" mt="300px" sx={{ fontSize: "1.3rem" }} marginLeft="1rem">
                    Men

                </Typography>
            }

        <Box sx={{ backgroundColor: "#000", padding: " 0.3rem" }} >
           





           <Grid container mt="1rem" columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} spacing={3} justifyContent="center" sx={{ backgroundColor: "#000", padding: "1rem" }} >
               <Grid item xs={6} sm={4} md={4} lg={3}>
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-8.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>


               </Grid>

               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-1.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>


               </Grid>

               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-2.png")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>

               </Grid>


               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-3.png")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>

               </Grid>


               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-4.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>

               </Grid>

               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-5.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>

               </Grid>

               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-7.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>


               </Grid>

               <Grid item xs={6} sm={4} md={4} lg={3} >
                   <Card sx={{ maxWidth: 345 }}>
                       <Box component="img" src={require("../img/man-6.jpg")} sx={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                       <CardContent>
                           <Typography component="div">
                              Red Shirt <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                           </Typography>

                       </CardContent>

                   </Card>


               </Grid>>






           </Grid>
           {matches ?
               <Button size="small" sx={{ backgroundColor: primary, color: secondary }}>
                   See More
               </Button> :
               <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>
                   See More
               </Button>

           }

       </Box>
        
        
        
        
        
        </>
        
        
    )
}


export default Men