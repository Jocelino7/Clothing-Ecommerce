import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Navbar from "./componentes/Navbar"
import Home from "./pages/Home"
import Footer from "./componentes/Footer"
import FooterMobile from "./componentes/FooterMobile"
import Men from "./pages/Men"
import { useMediaQuery } from "@mui/material"
import { createTheme } from '@mui/material/styles';
const App = () => {
  const theme = createTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route index  element={<Home />} />
          <Route path="/men" element={<Men />} />
        </Routes>

      
      {matches ? < FooterMobile /> : <Footer />}







    </>

  )

}
export default App