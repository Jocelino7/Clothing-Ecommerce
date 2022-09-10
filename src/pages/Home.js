import { Box, Typography, Button, useMediaQuery, Grid, Card, CardActions, CardContent} from '@mui/material';
import { createTheme } from '@mui/material/styles';
const primary = "#FFBC0D"
const secondary = "#FFF"

const Home = () => {
    const theme = createTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>

            {matches ?
                <Typography variant="h1" sx={{ fontSize: "1.3rem", fontWeight: "400", margin: "2rem 1rem" }} >
                    New Arrival

                </Typography>
                :
                <Typography variant="h3" mt="300px" sx={{ fontSize: "1.3rem" }} marginLeft="1rem">
                    New Arrival

                </Typography>
            }




            <Grid mt="1rem" ml="1rem" container columnSpacing={3} rowSpacing={3} columns={{ xs: 24, md: 12, lg: 12, sm: 12 }}>

                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-2.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>








                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-1.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>




                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-3.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-4.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>



                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-5.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>




                <Grid item container direction="row" spacing={3} xs={12} md={6} lg={4} sm={6}>

                    <Grid xs={4} item component="img" src={require("../img/short-6.jpg")}
                        sx={
                            {
                                width: "20rem",
                                maxHeight: "200px"

                            }

                        }
                    />


                    <Grid item xs={4} container>

                        <Grid xs={12} >
                            <Typography xs sx={{ fontWeight: "bold" }}> 31 USD</Typography>

                        </Grid>

                        <Grid>
                            <Typography xs
                                sx={
                                    {
                                        fontSize: "clamp(0.7rem, 0.9rem,1rem)"
                                    }}>
                                Jean short for you to fell more sexy</Typography>

                        </Grid>

                        <Grid xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: primary,
                                    color: secondary,
                                }}>
                                Explore
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>






            </Grid>

            {/*==========================================================================featured clothes=============================================================================*/}


            {matches ?
                <Typography variant="h1" sx={{ fontSize: "1.3rem", fontWeight: "400", margin: "2rem 1rem" }} >
                    Featured Clothes

                </Typography>
                :
                <Typography variant="h3" mt="300px" sx={{ fontSize: "1.3rem" }} marginLeft="1rem">
                    Featured Clothes

                </Typography>
            }

            <Grid container mt="2rem" columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} spacing={3} justifyContent="center" sx={{ backgroundColor: "rgba(255,188,13,0.8)", padding: "1rem" }} >
                <Grid item xs={6} sm={4} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }} >
                        <Box component="img" src={require("../img/short-7.jpg")} sx={{ minHeight:"200px", maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/short-8.jpg")} sx={{ minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/short-9.jpg")} sx={{ minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>


                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/short-10.jpg")} sx={{ minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>


                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/produto-1.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/produto-2.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/produto-3.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} >
                    <Card sx={{ maxWidth: 345 }}>
                        <Box component="img" src={require("../img/produto-4.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                        <CardContent>
                            <Typography  component="div">
                                Short
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Pretty short for you to feel sexy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                        </CardActions>

                    </Card>

                </Grid>






            </Grid>


            {/*==========================================================================You May Like=============================================================================*/}


            {matches ?
                <Typography variant="h1" sx={{ fontSize: "1.3rem", fontWeight: "400", margin: "1rem 1rem" }} >
                    You May like

                </Typography>
                :
                <Typography variant="h3" mt="300px" sx={{ fontSize: "1.3rem" }} marginLeft="1rem">
                    You May like

                </Typography>
            }
            <Box sx={{ backgroundColor: "#000", padding: "1rem" }} >




                <Grid container mt="2rem" columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} spacing={3} justifyContent="center" sx={{ backgroundColor: "#000", padding: "1rem" }} >
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-5.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>


                    </Grid>

                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-6.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>


                    </Grid>

                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-7.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>


                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-8.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>


                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-9.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-10.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-11.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>


                    </Grid>

                    <Grid item xs={6} sm={4} md={4} lg={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <Box component="img" src={require("../img/produto-12.jpg")} sx={{minHeight:"200px",maxHeight: "200px", width: "100%", objectFit: "cover" }} />

                            <CardContent>
                                <Typography  component="div">
                                    White Short <Button size="medium" sx={{ backgroundColor: primary, color: secondary }}>Explore</Button>
                                </Typography>

                            </CardContent>

                        </Card>


                    </Grid>>






                </Grid>
                {matches?
                    <Button size="small" sx={{backgroundColor:primary,color:secondary}}>
                      See More
                  </Button>:
                <Button size="medium"sx={{backgroundColor:primary,color:secondary}}>
                    See More
                </Button>

                }
              
            </Box>
























        </>
    )
}
export default Home