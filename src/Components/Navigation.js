import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import "./style.scss"
import { DiAndroid } from "react-icons/di";
export class Navigation extends Component {
    render() {
        return (
            <div className="demo">
                <Navbar bg="primary"  variant="dark">
                <DiAndroid/>
  <Navbar.Brand href="">Welcome</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#page1">Page1</Nav.Link>
      <Nav.Link href="#page2">Page2</Nav.Link>
        <NavDropdown.Divider />
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }
}

export default Navigation
