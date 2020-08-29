import React, { useState, useEffect } from 'react'
import Navbaar from './components/Navbaar'
import { Container,Card,Row,Col} from 'react-bootstrap'
import Footer from './components/Footer'
import './Home.css'


function Resdetails({ match }){

    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(
                `https://developers.zomato.com/api/v2.1/restaurant?res_id=${match.params.resid}`
            ,{headers:{
                'user-key': '8586489ab647215bcf6cd42a8e521037',
            }
            
            });
            const item = await fetchItem.json();
            console.log(item);
            setItem(item);

    };    
        fetchItem();
        console.log(match)
    },[]);

    const [item, setItem] = useState({});

    

    return(
        <div className='body'>
        <Navbaar />
        <Container>
        <div>
        <h1 style={{textAlign:"center",marginTop:"70px",marginBottom:"50px"}}>{item.name}</h1>
        <Card style={{width:'100%',backgroundColor:'#ffe8d4',borderRadius:'50px 20px',border:'2px solid red'}}>
                        
                       <Card.Body>
                       <Row><Col xs={12} sm={7} md={7} lg={8}>
                       <Card.Title style={{color:'#F95700FF',marginBottom:'4px',fontSize:"25px"}}>Cuisines</Card.Title>
                <span style={{fontWeight:'bold',fontSize:"20px"}}>{item.cuisines}</span><br/>
                <Card.Title style={{color:'#F95700FF',marginBottom:'4px',marginTop:"20px",fontSize:"22px"}}>Timings</Card.Title>
                <div style={{fontSize:"20px",marginBottom:"15px"}}>{item.timings}</div>
                <div>
                Average cost for two: {item.average_cost_for_two}</div>         
                <br/>
                <div style={{fontSize:"18px"}}>
                Telephone: {item.phone_numbers}</div>
                <hr/>


                       </Col><Col xs={12} sm={5} md={5} lg={4}>
                
                <Card.Img src={item.featured_image} variant="right" alt="" style={{borderRadius:'50px 20px'}} className="imgg"/>
                </Col></Row>
                </Card.Body>
                </Card>
                </div>
        </Container>
        <Footer/>
        </div>
    )
}

export default Resdetails