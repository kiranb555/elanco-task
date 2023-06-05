import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import './header.style.scss';

const Header = () => {
  return (
    <Navbar className="mb-2" color="dark" dark>
      <NavbarBrand href="/"><h2>Elanco</h2></NavbarBrand> 
      <Nav>
        <NavItem>
          <NavLink to="/applications" className='header-link'>
            Applications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resources" className='header-link'>
            Resources
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header