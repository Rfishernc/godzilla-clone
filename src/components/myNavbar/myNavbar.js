import React from 'react';
import './myNavbar.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


class myNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isAuthenticated, logoutClicked } = this.props;
    return (
      <div className='myNavBar'>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Godzillone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {isAuthenticated ? <NavLink onClick={logoutClicked}>Logout</NavLink> : ''}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default myNavbar;
