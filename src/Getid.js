import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'





function Getid({ match }){

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(
                `https://developers.zomato.com/api/v2.1/locations?query=${match.params.city}`
            ,{headers:{
                'user-key': '8586489ab647215bcf6cd42a8e521037'
            }});
            const items = await data.json();
            console.log(items.location_suggestions);
            setItems(items.location_suggestions);

    };
        fetchItems();
        console.log(match);
    },[]);

    const [items, setItems] = useState([]);

    
    return(
        <div>
          
            {items.map(item => (
                    <Redirect key={item.city_id} push to={`/${match.params.city}/${item.entity_id}`} />
                ))
            }            
        </div>
    )
}

export default Getid;
    
