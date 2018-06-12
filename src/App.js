import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,MenuItem,NavItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
		<Navbar inverse collapseOnSelect style={{backgroundColor:'teal',borderRadius:0,marginTop:0}}>
		  <Navbar.Header>
			<Navbar.Brand>
			  <a href="#home"  style={{color:'#fff',fontFamily: 'Cookie',fontSize:30}}>SoftwareSide</a>
			</Navbar.Brand>
		    <Navbar.Toggle />
			 </Navbar.Header>
			<Navbar.Collapse style={{borderColor:'white'}}>
		  <Nav>
			<NavItem href="#" >
			  <span style={{color:'#fff'}}>Music Player</span>
			</NavItem>
			<NavItem href="#">
			 <span style={{color:'#fff'}}> Testing Tool</span>
			</NavItem>
			</Nav>
				  <Nav pullRight>
			  <NavItem eventKey={1} href="#">
				<span style={{color:'#fff'}}>LogIn</span>
			  </NavItem>
			  </Nav>
			  </Navbar.Collapse>
		</Navbar>	
      );
  }
}

export default App;
