import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/notFound/notFound";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TollCalculation from "./pages/TollCalculation/TollCalculation";




const App = () =>{
    return (
        <BrowserRouter>
        <Navbar/>       
            <Routes>
            <Route index element={<Home/>}/>
            <Route path='TollCalculation' element={<TollCalculation/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        
    )
}
export default App;