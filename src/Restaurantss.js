import React, { useState, useEffect } from 'react'
import Navbaar from './components/Navbaar'
import { Container,Card,Row,Col,Button } from 'react-bootstrap'
import b1 from './components/images/b1.jpg'
import Footer from './components/Footer'
import {Link} from 'react-router-dom'


function Restaurantss({ match }){

    useEffect(() => {
	    const fetchItems = async () => {
            const data = await fetch(
                `https://developers.zomato.com/api/v2.1/search?entity_id=${match.params.id}&entity_type=city&count=10`
            ,{headers:{
                'user-key': '8586489ab647215bcf6cd42a8e521037',
            }
            
            });
            const items = await data.json();
            console.log(items.restaurants);
            setItems(items.restaurants);
    
    };   
        fetchItems();
        console.log(match)
    },[match]);

    const [items, setItems] = useState([]);

     

    
                

    return(
        <div className='body'>
        <Navbaar />
        
        <Container>
        <h1 style = {{textAlign:'center',marginTop:'3em',marginBottom:'3em',textTransform:'capitalize'}}>Restaurants in {match.params.city}</h1>
        <div>
            {
                
                items.map(item => (
                    <div>
                        <Card style={{width:'100%',backgroundColor:'#ffe8d4',borderRadius:'50px 20px',border:'2px solid red'}}>
                            <Row><Col xs={5} sm={5} md={4} lg={3}>
                        <Card.Img style={{borderRadius:'50px 20px'}} variant='left' src={item.restaurant.thumb === "" ? b1 : item.restaurant.thumb} className='cardimg'/>
                        </Col><Col xs={7} sm={7} md={8} lg={9}>
                       <Card.Body>
                      <p style={{fontSize:'small'}}> {item.restaurant.establishment} </p>
                <Card.Title style={{color:'#F95700FF',marginBottom:'4px'}} key={item.restaurant.R.res_id}>{item.restaurant.name}</Card.Title>
                <div key={item.restaurant.location.latitude}>
                {item.restaurant.location.locality_verbose}<br/>
                Rating: {item.restaurant.user_rating.aggregate_rating}/5<hr/></div>
                <Link to={`/${match.params.city}/${match.params.id}/${item.restaurant.R.res_id}`}><Button variant='dark'>View Details</Button></Link>
                </Card.Body>
                </Col></Row>
                </Card>
                <br/>
                </div>
                ))
            }
        </div>
        </Container>
        <Footer/>
        </div>
    )
}

export default Restaurantss