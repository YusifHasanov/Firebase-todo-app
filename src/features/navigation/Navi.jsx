import React from 'react';
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle, Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

const Navi = () => {

    return (
        <div>
            <Navbar
                color="danger"
                dark
                expand="md"
                light
            >
                <NavbarBrand >
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="#">
                                Todo List
                            </NavLink>
                        </NavItem>


                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navi;