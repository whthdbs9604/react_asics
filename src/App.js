import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/reset.css'
import './App.css';
import './css/main.css';
import Header from './Header';
import Footer from './Footer';
import Home from './main/Home';


function App() {
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
