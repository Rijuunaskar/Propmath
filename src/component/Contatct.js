import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';



const Contactleft = styled.div`
height:60%;
width:40%;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:33px;
position:relative;
margin-top:4%;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;

`

const Contactright = styled.div`
height:60%;
width:20%;
background-color: rgba(12, 51, 89, 0.95);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:35px;
color:white;
margin-top:4%;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;

`

const Upperhead = styled.div`
display:grid;
grid-template-columns:13fr 1fr;
`

const Bodydiv = styled.div`
display:flex;
justify-self:end;
flex-direction:column;
justify-content: space-evenly;
padding:18px 0px;
row-gap:28px;

`
const Item =styled.div`
 display:flex; 
 column-gap:15px;
`

const ItemA = styled.div`
    flex-basis:50%;
    display:flex;
    flex-direction:column;
`
const ItemB = styled.div`
    display:flex;
    
    

`
const Itemitem = styled.div`
    padding:40px 9px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #9494c7;
    outline: none;
    font-size: 14px;
    font-weight: 400;
`
const Label =styled.label`
    font-size: 14px;
    font-weight: bold;
    padding-left:4px
`
const Container = styled.div`
display:flex
`



function Contactus (){

return (
    <>
    <Navbar/>
    <div style={{display:'flex', height:'550px', width:'100%', backgroundColor:'#F6F6F6', alignItems:'center', justifyContent:'center'}}>
        <Contactleft>
            <Upperhead>
                <div style={{fontSize: '19px', fontWeight: 'bold'}}>Send us a Message</div>
                <EmailIcon sx={{mr:1, marginLeft: '3px', color:'#2183e3'}}/>
            </Upperhead>
            <Bodydiv>
                <Item>
                 <ItemA>
                     <Label>Name</Label>
                     <Container>
                            <AccountCircleIcon sx={{mr:1, marginLeft: '3px', color:'rgba(12,51,89,0.95)'}}/>
                            <Input placeholder='Enter your name'></Input>
                     </Container>
                 </ItemA>
                 <ItemA>
                    <Label>Email</Label>
                    <Container>
                        <EmailIcon sx={{mr:1, marginLeft: '3px', color:'rgba(12,51,89,0.95)'}}/>
                        <Input placeholder='Enter email id'></Input>
                    </Container>
                 </ItemA>
                </Item>
                <Item>
                    <ItemA>
                        <Label>Phone</Label>
                        <Container>
                            <SendToMobileIcon sx={{mr:1, marginLeft: '3px', color:'rgba(12,51,89,0.95)'}}/>
                            <Input placeholder='Enter mobile no'></Input>
                        </Container>
                    </ItemA>
                    <ItemA>
                        <Label>Query</Label>
                        <Container>
                            <QuestionAnswerIcon sx={{mr:1, marginLeft: '3px', color:'rgba(12,51,89,0.95)'}}/>
                            <Input placeholder='Ask any question'></Input>
                        </Container>
                    </ItemA>
                </Item>
                <Item>
                    <ItemA>
                        <Label>Message</Label>
                        <Container>
                            <MessageIcon sx={{mr:1, marginLeft: '3px', color:'rgba(12,51,89,0.95)'}}/>
                            <Input placeholder='Type your message here'></Input>
                        </Container>
                    </ItemA>
                </Item>
            </Bodydiv>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
            <SendIcon sx={{mr:1,  color:'#2183e3'}}/>
            </div>
        </Contactleft>



        <Contactright>
            <div style={{textAlign:'center', textAlign: 'center', fontSize: '18px', fontWeight:'bold'}}>Contact information</div>
           <Itemitem>
                <ItemB>
                    <BusinessIcon sx={{mr:1,  marginLeft: '3px', color:'white'}}/>
                    <div style={{fontSize:'13px'}}>MG Road, Gopal Krishna Complex 
                    45/3, Residency Road, Bangalore.</div>
                </ItemB>
                <ItemB>
                    <SendToMobileIcon sx={{mr:1,  marginLeft: '3px', color:'white'}}/>
                    <div style={{fontSize:'13px'}}>1234567890</div>
                </ItemB>

                <ItemB>
                    <EmailIcon sx={{mr:1, marginLeft: '3px', color:'white'}}/>
                    <div style={{fontSize:'13px'}}>sales@propmath.com</div>
                </ItemB>
            </Itemitem> 
        </Contactright>


    </div>
    </>
)


}

export default Contactus;