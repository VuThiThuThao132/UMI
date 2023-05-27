import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { BsFillHandIndexThumbFill } from "react-icons/bs"
const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const navHandler = () => {
        setNavToggle(prevData => !prevData);
    }
    return (
        <nav className='navbar '>
            <div className='container '>
                <div className='navbar-content '>
                    <div className='brand-and-toggler flex flex-between '>
                        <Link to="/" className='navbar-brand' >UMI</Link>
                        <button type="button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
                            <div className='bar-top'></div>
                            <div className='bar-middle'></div>
                            <div className='bar-bottom'></div>
                        </button>
                    </div>

                    <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
                        <div className='navbar-collapse-content'>
                            <ul className='navbar-nav'>
                                <li>
                                    <Link className='link' to="/">Trang chủ</Link>
                                </li>
                                <li>
                                    <Link className='link' to="/">Về chúng tôi</Link>
                                </li>
                                <li >
                                    <Link className='link' to="/">Trở thành mentor</Link>
                                </li>
                                <ul className='navbar-social flex'>
                                    <li >
                                        <Link to="" className='flex flex-center'>
                                            <BsFillHandIndexThumbFill />
                                        </Link>
                                    </li>
                                </ul>
                                <li >
                                    <Link className='link' to="/">Đăng kí</Link>
                                </li>
                                <li >
                                    <Link className='link' to="/">Đăng nhập</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </nav >
    )
}

export default Navbar
