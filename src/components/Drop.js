import React from 'react'
import{ Dropdown } from 'react-bootstrap'
import './Scroll.css'

function Drop(){
return(
<div className="down">
<Dropdown>
  <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic">
    Select your city
  </Dropdown.Toggle>

  <Dropdown.Menu className="scroll">
  <Dropdown.Item href='/agra'>Agra</Dropdown.Item>
  <Dropdown.Item href='/ahmedabad'>Ahmedabad</Dropdown.Item>
  <Dropdown.Item href='/alappuzha'>Alappuzha</Dropdown.Item>
  <Dropdown.Item href='bengaluru'>Bengaluru</Dropdown.Item>
  <Dropdown.Item href='/bhopal'>Bhopal</Dropdown.Item>
  <Dropdown.Item href='/chennai'>Chennai</Dropdown.Item>
  <Dropdown.Item href='/coimbatore'>Coimbatore</Dropdown.Item>
  <Dropdown.Item href='/delhi'>Delhi</Dropdown.Item>
  <Dropdown.Item href='/goa'>Goa</Dropdown.Item>
  <Dropdown.Item href='/hyderabad'>Hyderabad</Dropdown.Item>
  <Dropdown.Item href='/jaipur'>Jaipur</Dropdown.Item>
  <Dropdown.Item href='kannur'>Kannur</Dropdown.Item>
  <Dropdown.Item href='kasaragod'>Kasaragod</Dropdown.Item>
  <Dropdown.Item href='/kochi'>Kochi</Dropdown.Item>
  <Dropdown.Item href='/kodungallur'>Kodungallur</Dropdown.Item>
  <Dropdown.Item href='/kolkata'>Kolkata</Dropdown.Item>
  <Dropdown.Item href='/kollam'>Kollam</Dropdown.Item>
  <Dropdown.Item href='/kottayam'>Kottayam</Dropdown.Item>
  <Dropdown.Item href='/kozhikode'>Kozhikode</Dropdown.Item>
  <Dropdown.Item href='/lucknow'>Lucknow</Dropdown.Item>
  <Dropdown.Item href='/madurai'>Madurai</Dropdown.Item>
  <Dropdown.Item href='/malappuram'>Malappuram</Dropdown.Item>
  <Dropdown.Item href='/mangalore'>Mangalore</Dropdown.Item>
  <Dropdown.Item href='/manjeri'>Manjeri</Dropdown.Item>
  <Dropdown.Item href='/mumbai'>Mumbai</Dropdown.Item>
  <Dropdown.Item href='/mysore'>Mysore</Dropdown.Item>
  <Dropdown.Item href='/ooty'>Ooty</Dropdown.Item>
  <Dropdown.Item href='/palakkad'>Palakkad</Dropdown.Item>
  <Dropdown.Item href='/pathanamthitta'>Pathanamthitta</Dropdown.Item>
  <Dropdown.Item href='/patna'>Patna</Dropdown.Item>
  <Dropdown.Item href='/pune'>Pune</Dropdown.Item>
  <Dropdown.Item href='/thalassery'>Thalassery</Dropdown.Item>
  <Dropdown.Item href='/thodupuzha'>Thodupuzha</Dropdown.Item>
  <Dropdown.Item href='/thrissur'>Thrissur</Dropdown.Item>
  <Dropdown.Item href='/trivandrum'>Trivandrum</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
</div>
)
}
export default Drop