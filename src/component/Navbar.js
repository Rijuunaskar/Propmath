import React from 'react';
import styled from 'styled-components';
import logo1 from "../assets/propmathlogo.webp";
import logo from "../assets/detailsicon.png";
import {Link} from "react-router-dom";
import {  useNavigate } from "react-router-dom";


const Container = styled.div`
Display:flex;
height:60px;
width:100%;
align-items:center;
background-color: #0C3359;
position:fixed;
z-index:+999
`
const Right = styled.div`
display:flex;
flex:1;
justify-content:right; 
`

const Left = styled.div`
    flex-basic:1;
    display:flex;
    justify-content:right;
    

`
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``

// justify-content:flex-end;
//     align-items:center;


const Navitem = styled.div`
color: White;
padding-right:20px;  
cursor:pointer;  
margin-right: 5px;
padding-right: 45px  
`

const Image1 = styled.img`
    height:49px;
    width:53px; 
    align-items: center;
    padding-right:20px;
    padding-top: 8px;
    margin-right: 10px
`

const Image2 = styled.img`

    align-items: center;
    width:150px;
    height:50px;
    padding-left:20px;
    
`

const Dicon=styled.img`


`


function Navbar() {
    const navigate =  useNavigate();
    const handlelogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('contact');
        localStorage.removeItem('islogin');
        navigate("/login");
    }
    return (
        <Container> 
            <Left>
                <Image2 src={logo1}/>
            </Left>
            <Right>
            <Link to="/" style={{textDecoration: "none"}}> <Navitem>Home</Navitem></Link>
                <Navitem>Product</Navitem>
                <Link to="/contact" style={{textDecoration: "none"}}> <Navitem>Contact us</Navitem></Link>
                {
                    localStorage.getItem("islogin")?<Navitem 
                    onClick={handlelogout}
                    >Logout</Navitem>  : 
                    <Link to="/login" style={{textDecoration: "none"}}> <Navitem>Login</Navitem></Link>
                }
                <Link to="/Querypage" style={{textDecoration: "none"}}> <Navitem>Search</Navitem></Link>
                
            </Right> 

           
            <Image1 src={logo} />
           
           
          
        </Container>

    );
}

export default Navbar;
