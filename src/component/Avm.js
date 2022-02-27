import React from "react";
import styled from "styled-components";
import boximage from "../assets/Boximg.png";
import Navbar from "./Navbar";

const Productbox = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  
  column-gap: 25px;
  
`;

const Productdiv = styled.div`
  height: 315px;
  width: 390px;
  transition:auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  border-width:1px;
  border-radius:5px;
  padding: 5px;
  margin-top:60px;
  
  &:hover {
    background-color:white;
    color:black;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    border-top:solid;
    border-color: #e88038;
    
  }
`;

const Imgheading = styled.div`

`;
const Boximg = styled.img`
height: 110px;
width: 145px;
margin-top: 20px
`;

const Heading = styled.div`
  
  
  font-family: "Merriweather", serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color:#e88038;
`;

const Text = styled.div`
    font-size: small;
    font-family: Montserrat
    margin-top: 9px;
    padding:3px;
    height: 20px;
    width:307;
    letter-spacing: 0.5px;
    color:#3b3b3b
`;

const Div = styled.div`
height: 600px;
background-color:#F6F6F6;
`



function Avm() {
  return (
    <>
      <Navbar />
      <Div><label style={{marginTop:'100px', marginLeft:'100px', fontSize: '38px', fontWeight: 'bold'}}>Automated Valuation Model</label>
      <div style={{height:'2px', width:'98px', backgroundColor:'#e88038', marginLeft:'7%'}}></div>
      <Productbox>
        <Productdiv>
          <Imgheading>
            <Boximg img src={boximage} />
            <Heading>Securities</Heading>
          </Imgheading>
          <Text>
          An upcoming product, this is in line with our view that developers and especially REITs are little more than pass through securities and their underlying fundamental value depends largely on the underlying land and real estate holdings of these firms.
          </Text>
          
          
        </Productdiv>

        <Productdiv>
          <Imgheading>
            <Boximg img src={boximage} />
            <Heading>Collect Data</Heading>
          </Imgheading>
          <Text>
          Collecting detailed data on these holdings from filings and news sources, and debt data from our partners.
          </Text>
         
         
        </Productdiv>

        <Productdiv>
          <Imgheading>
            <Boximg img src={boximage} />
            <Heading>Share Valuation</Heading>
          </Imgheading>
          <Text>
          we are creating the RDV to allow investors to have a core value of a developer and thus a clearer understanding of per share valuation.
          </Text>
         
        </Productdiv>
      </Productbox>
      </Div>
    </>
  );
}

export default Avm;