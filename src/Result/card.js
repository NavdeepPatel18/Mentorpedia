import React from "react";
import './card.css';
import {  Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/Logo.png';
export default function Cards({data}) {
  return (
    <>
    <div style={{alignContent:"center", justifyContent:"center", alignItems:'center'}}>
        <Card style={{borderRadius:'15px',backgroundColor:'#808080' , width: '80%', borderWidth:'0px', marginBottom:'10px', marginLeft:'10%'}}>
            
            <Card.Body>

                <div>
                    <Card.Img 
                        style={{width:'130px'}} 
                        src={data.image} 
                        onError={(event) => {
                            // If src points to any non-image url
                            event.target.src = logo;
                        }}
                    />
                    <Card.Title style={{fontSize:'30px', color:'white'}}>{data.name}</Card.Title>
                    <Card.Text style={{ color:'white'}}>
                    {/* {data.position.map((pos,index) => {
                        return <ul key={index}>{pos}</ul>
                    })} */}

                    {data.position}
                    </Card.Text>

                    <span style={{fontWeight:'bold', color:'white'}}>Contact Details:</span>
                    <Card.Text style={{ color:'white'}}>
                        {data.email}<br/>
                        {data.phone}<br/>
                        <a href= {data.website}>{data.website}</a>
                    </Card.Text>
                    <Card.Text style={{ color:'white'}}>
                    {/* {data.research_areas.map((r_area,index) => {
                        return <ul key={index}>{r_area}</ul>
                    })} */}

                    {data.research_areas}                    </Card.Text>

                </div>
            </Card.Body>
        </Card>
    </div>
    </>
  );

}

