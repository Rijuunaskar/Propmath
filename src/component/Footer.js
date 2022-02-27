import React from 'react';
import styled from 'styled-components'
import {Container,Row,Col} from 'react-bootstrap';
import Propmath from '../assets/propmathlogo.webp';

function Footer() {
  return (
    <Container style={{padding:"20px 20px",height:'400px',background:"#0C3359",overflowY:'hidden'}} fluid >
    <Row style={{padding:"10px 40px"}}>
      <Col >
        <img src={Propmath} style={{height:"60px"}}></img>
      </Col>
      <Col style={{color:'#cccade',fontWeight:"bold",fontSize:"30px",textAlign:"center"}}>
        Stay In Touch
      </Col>
      <Col></Col>
    </Row>
    <Row style={{padding:"60px 40px"}}>
        <Col style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Row style={{color:"#cccade",fontSize:"18px",marginBottom:"5px",fontWeight:"bold"}}>
                Company
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px", }}>
               <a href='./SignUp' style={{textDecoration:'none', color:'#cccade',fontSize:"16px" }}>Home</a> 
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                About Us
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                Executive Team
            </Row>
        </Col>
        <Col style={{borderLeft:"5px solid #A47F38",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Row style={{color:"#cccade",fontSize:"18px",marginBottom:"5px",fontWeight:"bold"}}>
                Address
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                MG Road, Gopal Krishna Complex
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                45/3, Residency Road, Bangalore
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                India
            </Row>
        </Col>
        <Col style={{borderLeft:"5px solid #A47F38",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Row style={{color:"#cccade",fontSize:"18px",marginBottom:"5px",fontWeight:"bold"}}>
                Sales
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                sales@propmath.com 
            </Row>
            <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                Tel: (+91)99999 99999
            </Row>
            {/* <Row style={{color:"#cccade",fontSize:"16px",marginBottom:"5px"}}>
                Executive Team
            </Row> */}
        </Col>
    </Row>
    <div style={{fontSize:"14px",display:"flex",color:"#cccade",justifyContent:"center"}}>
            © 2023 by PropMath. All rights reserved
    </div>
  </Container>
    );
}

export default Footer;
