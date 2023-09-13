import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";

const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-[#010C15] p-5 h-screen max-h-screen">
            <div data-aos="zoom-in" className="bg-[#011627] border flex flex-col justify-between border-[#1E2D3D] h-full rounded-[8px]">
                <Navbar/>

                <Routes>
                    <Route element={<Main/>} path="/" />
                    <Route element={<About/>} path="/about" />
                </Routes>

                <Footer/>
            </div>
        </div>
    )
}

export default App