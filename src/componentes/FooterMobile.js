import { Box, Typography, Button, useMediaQuery, Grid, Link, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme } from '@mui/material/styles';
const primary = "#FFBC0D"
const secondary = "#FFF"

const Footer = () => {
    const theme = createTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box mt="4rem" component="footer" sx={{ backgroundColor: primary, width: "100%" }}>
            <Grid container spacing={2} direction="columns"  justifyContent="center" columns={{ sm: 16, md: 16, lg: 16 }} align="center">
                <Grid item >
                    <Typography color={secondary} variant="h5" sx={{fontWeight:"bold"}}>
                        Fashion
                    </Typography>
                    <Typography color={secondary} sx={{ textTransform: "captalize" }}>
                        Fashion is the marketplace
                    </Typography>
                    <Typography  color={secondary} sx={{ textTransform: "captalize" }}>
                    where you can find everything you need
                    </Typography>

                </Grid>
                <Grid item container direction="column">
                    <Typography color={secondary} variant="h6" sx={{fontWeight:"bold"}}>Fast Links</Typography>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary} >Home</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Men</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary} >Women</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Women</Link>

                </Grid>


                <Grid item container direction="column" >
                    <Typography color={secondary} variant="h6" sx={{fontWeight:"bold"}}>Important Links</Typography>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Terms</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Legality</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Partners</Link>
                    <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}>Clients</Link>

                </Grid>
                <Grid item >
                    <Typography color={secondary} variant="h6" sx={{fontWeight:"bold"}} >Social Media</Typography>

                    <Grid container spacing={1} direction="row">
                        <Grid item>
                            <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}><FacebookIcon /></Link>

                        </Grid>
                        <Grid item>
                            <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}><InstagramIcon /></Link>
                        </Grid>
                        <Grid item>
                            <Link href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}><YouTubeIcon /></Link>

                        </Grid>

                        <Grid item>
                            <Link item href="" rel="noreferrer" variant="inherit" underline="none" color={secondary}><WhatsAppIcon /></Link>

                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
            <Box sx={{padding:"1rem",backgroundColor:"#000",height:"100px"}}>
                <Typography color={secondary}>
                    Copyright © 2022 Fashion

                </Typography>
            

            </Box>





        </Box >
    )


}
export default Footer