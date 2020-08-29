import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import fuddy from './images/fuddy.JPG'
import './Navv.css'
function Navbaar(){
    return(
    <div>
<Navbar className="navi">
  <Container>
    <Navbar.Brand href="/">
      <img
        alt=""
        src={fuddy}
        width="95"
        height="85"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    </Container>
  </Navbar>
</div>
    )}
export default Navbaar