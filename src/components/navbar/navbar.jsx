import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [path, setPath] = useState("/")

    useEffect(() => {
        if (window.location.pathname === "/") {
            setPath("/")
        } else {
            setPath("/about")
        }
    }, [window.location.pathname])

    return (
        <div className="px-[25px] h-[55px] border-b border-[#1E2D3D] flex items-center justify-between">
            <div className="flex justify-center items-center lg:gap-[150px]">
                <h2 className="text-[#607B96] font-[450]">Khatamov Nuriddin</h2>
                <div className="flex items-center justify-center">
                    <Link 
                        to={"/"}                                         
                    >
                        <p 
                            className={path === "/" ? 
                            "border-b-[3px] cursor-pointer border-b-[#FEA55F] text-[#fff] border-l border-l-[#1E2D3D] h-[55px] flex items-center px-[25px] font-[450]" 
                            : "text-[#607B96] hover:text-[#fff] cursor-pointer border-x border-[#1E2D3D] h-[55px] flex items-center px-[25px] font-[450]"}
                            onClick={() => setPath("/")}>
                            _hello
                        </p>
                    </Link>

                    <Link 
                        to={"/about"}                                         
                    >
                        <p 
                            className={path === "/about" ? 
                            "border-b-[3px] cursor-pointer border-b-[#FEA55F] text-[#fff] border-l border-l-[#1E2D3D] h-[55px] flex items-center px-[25px] font-[450]" 
                            : "text-[#607B96] hover:text-[#fff] cursor-pointer border-x border-[#1E2D3D] h-[55px] flex items-center px-[25px] font-[450]"}
                            onClick={() => setPath("/about")}>
                            _about
                        </p>
                    </Link>
                </div>
            </div>
            <div className="h-[55px] flex items-center border-[#1E2D3D] border-l">
                <a href="/khatamovnuriddin.pdf" target="_blank" className="text-[#607B96] hover:underline flex items-center pl-[20px] font-[450]">resume <i className="ml-2 fa-solid fa-download"></i></a>
            </div>
        </div>
    )
}

export default Navbar