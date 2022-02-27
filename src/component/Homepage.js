import { style } from '@mui/system';
import './homepage.css';
import React from 'react';
import styled from 'styled-components';
import Firstimg from '../assets/Navbarimg.jpg';
import Propmath from '../assets/propmathlogo.webp';
import Detailicon from '../assets/detailsicon.png';
import boximage from '../assets/Boximg.png';
import Lineimg from '../assets/image13.png';
import Ourstory from '../assets/ourstoryicon.png';
import Ourvision from '../assets/ourvisionicon.png';
import Technology from '../assets/technologyicon.png';
import Icon from '../assets/iconfirst.png';
import Imageclient from '../assets/client.jpg';
import Button from '@mui/material/Button';
import react, {useState,useEffect} from 'react';
import Clientimg1 from '../assets/clientimg.webp';
import Clientimg2 from '../assets/clientimg2.webp';
import Clientimg3 from '../assets/clientimg3.webp';
import Clientimg4 from '../assets/clientimg4.webp';
import Clientimg5 from '../assets/clientimg5.webp';
import Clientimg6 from '../assets/clientimg6.webp';
import {Link, useNavigate,Navigate} from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Homepagebody= styled.div`
    width:100%;
    background-color:#F6F6F6;
`
const Navbarbody = styled.div`
    background-image: url(${Firstimg});
    width: 100%;
    height: 660px;
    background-size: cover;
`

const Nav = styled.div`
    Display:flex;
    height:60px;
    width:100%;
    align-items:center;
    position:sticky;
    background:transparent;
    z-index: +1;
`
    


const Navlogo = styled.div`
    display:flex;
    flex:1;
    justify-content:left;
` 
const Logoimg = styled.img`
    align-items: center;
    width:150px;
    height:50px;
    padding-left:20px;
`

const Navright = styled.div`
    display:flex;
    flex-basic:1;
    justify-content:right;  
`

const Navitem = styled.div`
    color: White;
    padding-right:20px;  
    cursor:pointer;  
    margin-right: 5px;
    padding-right: 45px
`
const Navimg = styled.div`
    padding-right: 30px
`

const Detailiconimg = styled.img`
    height:40px;
    width:30px;
    padding-top:8px;
    cursor:pointer;
`
const Timedata = styled.div`
    background-color: #0C3359;
    width:578px;
    height:fit-content;
    margin-top: 241px;
    margin-left: 100px;
    display:flex;
`
const Tag = styled.text`
    color: white;
    font-family: 'Merriweather', serif;
    font-size: xx-large;
    justify-content: center;
    padding-left:10px;
`
const Bar =styled.div`
    background-color:#A47F38;
    height:60px;
    width:7px;
    display:flex;
    margin-top: 230px;
    margin-left: 170px;
    margin-right: -93px;
`
const Bartime =styled.div`
    display:flex;

`

const Secondbox = styled.div`
    background-color: #0C3359;
    width: 698px;
    height: 66px;
    margin-top: 30px;
    margin-left: 332px;
    border: 2px solid #e88038   ;
    border-width: 5px;
    color: white;
    font-family: 'Merriweather', serif;
    font-size: xx-large;
    text-align: center;
`


const Productbox = styled.div`
    display:flex;
    margin-left: 123px;
    margin-top: 65px;
    column-gap: 25px;

`

const Productbox2 = styled.div`
    display:flex;
    margin-left: 123px;
    margin-top: 35px;
    column-gap: 25px;
`

const Productbox3 = styled.div`
    display:flex;
    margin-left: 123px;
    margin-top: 35px;
    column-gap: 25px;
`

const Productdiv = styled.div`
    height: 221px;
    width: 343px;
    border:solid;
    border-color:#0000002e;
    border-width:1px;
    border-radius:5px;
    padding: 5px;
    &:hover {
        background-color:white;
        color:black;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        border-top:solid;
        border-color: #e88038;
        border-left
    }
`




const Text = styled.div`
    font-size: small;
    font-family: Montserrat
    margin-top: 9px;
    margin-left: 17px;
    height: 20px;
    width:307;
    letter-spacing: 0.5px;
    color:#3b3b3b
`
const Heading = styled.div`
    padding-top: 13px;
    padding-left: 10px;
    font-family: 'Merriweather',serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
`
const Righticon = styled.img`
height: 18px;
width: 18px;
margin-left: 92%;
margin-top: 3%;
`
const Imgheading = styled.div`
    display:flex;
`
const Boximg = styled.img`
    height: 65px;
    width: 77px;
    padding-left:7px
`
const Seemore = styled.div`
    height:30px;
    width:120px;
    border:solid;
    border-radius: 2px;
    border-width: 2px;
    border-color:#e88038;
    position: absolute;
    cursor:pointer;
    margin-top:2%;
    right: 111px;
    &:hover {
        background-color:#e88038;
        color:white;
    }
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
`

const Meetdiv =styled.div`
   width:100%;
   height:90px;
   background-color: #0C3359;
   margin-top:11%;
   display:flex;

`
const SpanText = styled.div`
    color:white;
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
    font-family: 'Merriweather', serif;
    font-size: xx-large;
`


const Meetdiv1 = styled.img`
    color:white;
    display:flex;
    flex-basic:1
`
const Meetdiv2 = styled.img`
    color:white;
    display:flex;
    flex-basic:1
`

const Description =styled.div`

`

const Firstheading = styled.div`
margin-top:12%;
margin-left:36%;
font-family: 'Merriweather',serif;
font-size: 27px;
`

const Secondheading = styled.div`
margin-top:5%;
margin-left:19%;
font-family: 'Merriweather',serif;
font-size: 27px;

`

const Thirdheading = styled.div`
margin-top:5%;
margin-left:36%;
font-family: 'Merriweather',serif;
font-size: 27px;

`


const Firstdiv = styled.div`
display:flex;
margin-left: 19%;
`

const Seconddiv = styled.div`
display:flex;
margin-left: 19%;
`

const Thirddiv = styled.div`
display:flex;
margin-left: 19%;
margin-bottom:12%;
`
const Ourstorydiv = styled.img`
height:158px;
display:flex
    width: 70%;
    margin-top: 40px;
    padding-right: 41px
`

const Ourvisiondiv = styled.img`
height:158px;
display:flex
    width: 70%;
    margin-top: 40px;
    padding-left:37px
`
const Technologydiv = styled.img`
    height:158px;
    display:flex
    width: 70%;
    margin-top: 40px;
    
`

const Ourstorytext = styled.div`
    width:60%;
    padding-top: 24px;
    
`

const Ourvisiontext = styled.div`
    width:60%;
    padding-top: 24px;
    
    
`

const Technologytext = styled.div`
    width:60%;
    padding-top: 24px;
    
    padding-left: 4%;
    
`
const Linediv = styled.div`
    height:1px;
    width: 100%%;
    margin-top: 9px;
    margin-bottom: 9px;
    background-color:#A47F38;
`
const Client = styled.div`
    background-image: url(${Imageclient});
    margin: 60px 1px 40px 1px;
    height:400px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color:white;
    font-weight: bold;
`
const CuroselItem = styled.div`
    // height:40px;
`

const Clientimgdiv = styled.div`

`
const Clientfirst = styled.div`
display:flex;
`
const Clientlogo = styled.img`
display:flex
`

function Homepage() {

let navigate = useNavigate();
const[navbar, setNavbar] =useState(false);
const breakPoints =  [
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:4},
    {width:768,itemsToShow:5},
    {width:1200,itemsToShow:5},
];

const changebackground = () =>{
    if (window.scrollY>= 60){
        setNavbar(true);
    }
    else{
        setNavbar(false);
    }
}

const handlelogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('contact');
    localStorage.removeItem('islogin')
    navigate("/login");
}
window.addEventListener('scroll',changebackground);


    return(
        <Homepagebody>
            <Navbarbody>
                <div style={{height: "100px"}}>
                    <nav className={navbar ? 'navbar active' : 'navbar'}>
                    
                        <Navlogo>
                            <Logoimg img src={Propmath}/>
                        </Navlogo>
                            <Navright>
                                <Link to="/" style={{textDecoration: "none"}}><Navitem>Home</Navitem></Link>
                                <Link to="/contact" style={{textDecoration: "none"}}> <Navitem>Contact us</Navitem></Link>
                                <Navitem>Product</Navitem>
                                <Link to="/Querypage" style={{textDecoration: "none"}}> <Navitem>Search</Navitem></Link>
                                <Navitem 
                                onClick={handlelogout}
                                >Logout</Navitem>                                
                            </Navright> 
                        
                        
                        <Navimg>
                            <Detailiconimg img src={Detailicon}/>
                        </Navimg>
                    
                    </nav>
                </div>
                <Bartime>
                    <Bar></Bar>
                    <Timedata>
                        <Tag>FAST & RELIABLE REAL-TIME DATA</Tag>
                    </Timedata>
                </Bartime>
            </Navbarbody>
            <Secondbox>
                Our Service Area
            </Secondbox>
            <Productbox>
                <Productdiv> 
                   <Righticon img src={Icon}/>
                   <Imgheading>
                       <Boximg img src={boximage}/>
                       <Heading>Automated Valuation Model</Heading>
                   </Imgheading>                   
                   <Text> 
                       Our AVM delivers an online housing estimate based on proprietary data science models buildon  individual housing data, economic data....
                   </Text>
                   <Link to="/product" >
                   <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button></Link>
                </Productdiv>


                <Productdiv> 
                   <Righticon img src={Icon}/>
            
                    <Imgheading>
                        <Boximg img src={boximage}/>
                        <Heading>Risk Dashboard ( RD )</Heading>
                    </Imgheading>    
                    <Text> 
                        This is a custom-created product especially for large portfolio holders and managers of commercial real estate...
                    </Text>
                    <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>



                <Productdiv> 
                <Righticon img src={Icon}/>
                    <Imgheading>
                        <Boximg img src={boximage}/>
                        <Heading>PropMath Home Market score</Heading>
                    </Imgheading>    
                    <Text> 
                        Our PM Market Score reflects the overall state of the housing market in a particular locality.
                        It reflects the leveland changein housing market....
                    </Text>
                    <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>
            </Productbox>
            <Productbox2>
                <Productdiv>
                <Righticon img src={Icon}/>  
                    <Imgheading>
                        <Boximg img src={boximage}/>
                        <Heading>PropMath Home Price Index</Heading>
                    </Imgheading> 
                    <Text> 
                        Quality/quantity adjusted home price index,similar to the Case Shiller Index in the United States.The Home Price Index is a metric...
                    </Text>
                    <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>


                <Productdiv> 
                <Righticon img src={Icon}/> 
                    <Imgheading>
                        <Boximg img src={boximage}/>
                        <Heading>Cre Automated Valuation Model (CAVM)</Heading>
                    </Imgheading> 
                    <Text> 
                        Proprietary algorithms to estimate an accurate valuation of any office property in hundreds of localities.This is an essential tool for the...
                    </Text><Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>

                <Productdiv> 
                <Righticon img src={Icon}/>
                    <Imgheading>
                        <Boximg img src={boximage}/>
                        <Heading>CRE Price Index (CPI) and CRE Lease Index (CLI)</Heading>
                    </Imgheading> 
                    <Text> 
                        Using the ARM and AVM over more than a decade of data, PropMath has created rental and price 
                        indexes which compare like-to-like...
                    </Text><Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>
            </Productbox2>
            <Productbox3>
                <Productdiv> 
                <Righticon img src={Icon}/> 
                        <Imgheading>
                            <Boximg img src={boximage}/>
                            <Heading>CAP RATES</Heading>
                        </Imgheading> 
                        <Text> 
                            One of the most important global metrics for understanding real estate investment yields and the robustness of the markets...
                        </Text><Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>

                <Productdiv> 
                <Righticon img src={Icon}/>  
                        <Imgheading>
                            <Boximg img src={boximage}/>
                            <Heading>CRE SHARPE RATIOS</Heading>
                        </Imgheading> 
                        <Text> 
                        The final piece of the puzzle for investors and potentially for a burgeoning REIT market is a risk-adjusted returns value for...
                        </Text>
                        <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                </Productdiv>


               
                <Productdiv>
                <Righticon img src={Icon}/> 
                        <Imgheading>
                            <Boximg img src={boximage}/>
                            <Heading>REIT & DEVELOPER VALUATION</Heading>
                        </Imgheading> 
                        <Text> 
                        An upcoming product, this is in line with our view that developers and especially REITs are little more than pass through securities...
                        </Text>
                        <Button className="buttonlearnmore"  variant="contained">
                            Learn more
                        </Button>
                        
                        
                </Productdiv>
            </Productbox3>
            <Seemore>
                See more
            </Seemore>
            <Meetdiv>
                <Meetdiv1 src={Lineimg}/>
                <SpanText>Meet Propmath</SpanText>
                <Meetdiv2 src={Lineimg}/>
            </Meetdiv>
            <Description>
                <Firstheading>
                    Our Story  
                </Firstheading>
                <Firstdiv>
                    <Ourstorydiv img src={Ourstory}/>
                    
                    <Ourstorytext>
                    The final piece of the puzzle for investors and potentially for a burgeoning REIT 
                    market is a risk-adjusted returns value for every locality.
                    <Linediv></Linediv>
                   
                    Using volatility of returns, actual returns, market returns and the risk-free rate,the PropMath 
                    team has used options models and methods of quantitative finance to create a Sharpe Ratio at the locality level for real estate.
                    <Linediv></Linediv>
                    Our endeavour is to have this metric even for all Class A building in large urban areas and
                    we are working towards that goal.
                            
                    </Ourstorytext>
                </Firstdiv>



                <Secondheading>
                    Our Vision
                   
                </Secondheading>
                <Seconddiv>
                   
                    <Ourvisiontext>
                    The final piece of the puzzle for investors and potentially for a burgeoning REIT 
                    market is a risk-adjusted returns value for every locality.
                    <Linediv></Linediv>
                   
                    Using volatility of returns, actual returns, market returns and the risk-free rate,the PropMath 
                    team has used options models and methods of quantitative finance to create a Sharpe Ratio at the locality level for real estate.
                    <Linediv></Linediv>
                    Our endeavour is to have this metric even for all Class A building in large urban areas and
                    we are working towards that goal.
                            
                    </Ourvisiontext>
                    
                    <Ourvisiondiv img src={Ourvision}/>

                </Seconddiv>

                <Thirdheading>
                    Technology
                   
                </Thirdheading>
                <Thirddiv>
                    <Technologydiv img src={Technology}/>
                    
                    <Technologytext>
                    The final piece of the puzzle for investors and potentially for a burgeoning REIT 
                    market is a risk-adjusted returns value for every locality.
                    <Linediv></Linediv>
                   
                    Using volatility of returns, actual returns, market returns and the risk-free rate,the PropMath 
                    team has used options models and methods of quantitative finance to create a Sharpe Ratio at the locality level for real estate.
                    <Linediv></Linediv>
                    Our endeavour is to have this metric even for all Class A building in large urban areas and
                    we are working towards that goal.
                            
                    </Technologytext>
                </Thirddiv>
            </Description>
            <Client>
                Clients who trust Us
            </Client>
            <Carousel enableAutoPlay={true} autoPlaySpeed={1000} breakPoints={breakPoints} style={{height: "360px",padding:"60px 40px"}}>
             <CuroselItem>
                <img
                        className="legend"
                        src={Clientimg4}
                        alt="Third slide" 
                />
             </CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg2}
                        alt="Third slide" 
                /></CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg3}
                        alt="Third slide" 
                /></CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg1}
                        alt="Third slide" 
                /></CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg5}
                        alt="Third slide" 
                /></CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg6}
                        alt="Third slide" 
                /></CuroselItem>
             <CuroselItem> <img
                        className="legend"
                        src={Clientimg2}
                        alt="Third slide" 
                /></CuroselItem>
            </Carousel>

        </Homepagebody>
    );
}
export default Homepage;
