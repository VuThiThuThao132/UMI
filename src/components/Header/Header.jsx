import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
    return (
        <header className='header flex flex-center flex-column'>
            <Navbar />
            <div className='container1'>
                <img height={400} src="https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg" />
            </div>
        </header>
    )
}

export default Header
