import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/reset.css'
import './App.css';
import './css/main.css';
import Header from './Header';
import Footer from './Footer';
import Home from './main/Home';


function App() {

    useEffect(() => {

        AOS.init({
        duration: 1000,
        once: true,    
        });
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />

            <Routes>
                <Route path="/" exact={true} element={<Home />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
