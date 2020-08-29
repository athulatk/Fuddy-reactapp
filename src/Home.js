import React from 'react'
import {Container, Jumbotron } from 'react-bootstrap'
import Demo from './Demo'
import Navbaar from './components/Navbaar'
import './Home.css'
import Drop from './components/Drop'
import Footer from './components/Footer'


function Home(){
    return(
        <div className="front">
          <Navbaar />
            <Jumbotron className="jumbo">
  <Container>
            
            <h4 className="h4" style={{marginTop:'50px',marginBottom:'80px',color:'white'}}>Thinking the best restaurant to eat?<br/>
            Explore restaurants in your area with Fuddy</h4>
            <div>
            <Drop /></div>
            </Container>           
</Jumbotron>
<h4 style={{textAlign:'center'}}>Food Facts Exclusive from Fuddy!</h4><br/>

<Demo />
<Footer />
        </div>

    )
}
export default Home