import React, {useState} from 'react'
import{
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap' 
  import { Link } from 'react-router-dom'
  
  const Header = () =>{
    const [open, setOpen] = useState(false)
    const toogle = () =>{
      setOpen(!open)
    }
  return ( 
<div className="container ">
  <Navbar className='' color = 'light' light expand = 'md' >
    <NavbarBrand tag={Link} to='/'>Minhas séries</NavbarBrand>
      <NavbarToggler onClick={toogle}/>
        <Collapse isOpen = {open} navbar>
          <Nav className = 'ml-auto' navbar>
            <NavItem>
                <NavLink tag ={Link} to = '/Generos'>Genêros</NavLink>
            </NavItem>
            <NavItem>  
                <NavLink tag ={Link} to = '/Series'>Séries</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
  </Navbar>
  </div>
        ) 
   }
export default Header