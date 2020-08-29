import React from 'react'
import Fuddy from './images/fuddy.JPG'
import { Jumbotron,Container } from 'react-bootstrap'
import './Navv.css'
function Footer(){
    return(
        <div><footer>
            <Jumbotron className='second'>
            <Container>
                <img src={Fuddy} width="95" height="85" alt=""/> <p style={{color:"white"}}>The complete restaurant finder app</p>
            </Container>
            </Jumbotron>
            </footer>
        </div>
        
    )
}
export default Footer