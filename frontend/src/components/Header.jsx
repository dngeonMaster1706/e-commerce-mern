import {Badge,Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { FaShoppingCart,FaUser } from "react-icons/fa";
import {useSelector} from 'react-redux'



const Header = () => {
  const { cartItems }=useSelector((state)=>state.cart);
  console.log(cartItems);
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
        <Container>
             
             <LinkContainer to='/'>
             <Navbar.Brand>
              nerdNook
             </Navbar.Brand>
             

             </LinkContainer>
                
             
             <Navbar.Toggle aria-controls='basic-navbar-nav'/>
             <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                    <Nav.Link><FaShoppingCart/>Cart
                    {
                      cartItems.length > 0 && (
                        <Badge pill bg='succes'style={{marginLeft:'5px'}}>
                            {cartItems.reduce((a,c)=>a+c.qty,0)}
                        </Badge>
                      )
                    }
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                    <Nav.Link><FaUser/>LogIn</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
             </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  ) 
}

export default Header
  