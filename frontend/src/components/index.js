import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
//import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return(
            // <nav>
            //     <NavLink to="/">
            //         Home
            //     </NavLink>
            //     <NavLink to="/about">
            //         About
            //     </NavLink>
            //     <NavLink to="/contact">
            //         Contact Us
            //     </NavLink>
            // </nav>

            <>
                <Nav>
                    <NavMenu>
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/register" activeStyle>
                            Register
                        </NavLink>
                        <NavLink to="/login" activeStyle>
                            Login
                        </NavLink>
                        {/* <NavLink to="/blogs" activeStyle>
                            Blogs
                        </NavLink>
                        <NavLink to="/sign-up" activeStyle>
                            Sign Up
                        </NavLink> */}
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default Navbar;