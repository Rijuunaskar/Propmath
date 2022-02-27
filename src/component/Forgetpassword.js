import React from 'react';
import styled from 'styled-components'
import LockIcon from '@mui/icons-material/Lock';
import Forgetbackimg from '../assets/forgetpaswordimg.png';
import Navbar from './Navbar';
import CallIcon from '@mui/icons-material/Call';
import Snackbar from '@mui/material/Snackbar';
import {Sendotp,Verifyotp} from '../services/Restservice.js'
import {  useNavigate } from "react-router-dom";




const Bodycontainer = styled.div`
    background-image:linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${Forgetbackimg});
    background-repeat: no-repeat;
    background-size:cover;
    width:100%;
    height: 657px;
    display:flex
`
const Login = styled.div`
    background: #0C3359;
    display:flex;
    align-items: center;
    justify-content:center;
    height:64%;
    width:26%;
    flex-direction:column;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin-top: 13%;
    margin-left: 12%;

`
const Textinput2 = styled.input`

border: 1px solid ;
border-top:none;
border-left:none;
border-right:none;
width:60%; 
margin-right:5px;
background-color: transparent;
border-color: white;
color:white;
&:focus{
    outline: none; 
}
&::placeholder {
    color: white;
  }
`


const Textinput = styled.input`

border: 1px solid ;
border-top:none;
border-left:none;
border-right:none;
width:100%; 
margin-right:5px;
background-color: transparent;
border-color: white;
color:white;
&:focus{
    outline: none; 
}
&::placeholder {
    color: white;
  }
`

const Item = styled.div`
    display: flex;
    
`

const InputBox = styled.input`
Background-color:#A47F38;
border:1px;
width:112px;
height:30px;
border-radius:5px;
color:white;

`

const Rem= styled.div`
display: grid;
grid-template-columns: auto auto auto;
padding: 10px; 
`
const Otpinput = styled.input`
    padding-left: 15px;
    letter-spacing: 30px;
    border-bottom: 1px solid white;
    margin-left:10px;
    //   background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 50px 1px;
    background-repeat: repeat-x;
    background-position-x: 35px;
    width: 70%;
    outline : none;
`


function ForgetPassword() {
    const navigate =  useNavigate();
    const [mobile, setMobile] = React.useState(0);
    const [password, setPassword] = React.useState(0);
    const [newpassword, setNewpassword] = React.useState(0);
    const [showotp, setshowotp] = React.useState(true);
    const [otpsend, setOtpsend] = React.useState(false);
    const[otp,setOtp] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState(false);

    
        const handelMobileChange = event =>{
            setMobile(event.target.value);
            
        };
        const handelPasswordChange = event =>{
            setPassword(event.target.value);
        };
        const handelOtpChange = event =>{
            setOtp(event.target.value);
        };
        const NewpasswordChange = event =>{
            setNewpassword(event.target.value);
        };

        
        const showsnackbar =((msg)=>{
            setOpen(true);
            setMsg(msg);
            setTimeout(function(){
                setOpen(false);
            },3000)
        })

        const submit = event =>{
            // validateEmail(emailid);
            // matchPassword(password,newpassword)
            console.log(showotp)
            if(showotp){
                showsnackbar("Please verify your mobile first");
            }else{
                if(matchPassword(password,newpassword)){
                    const postData={
                        mobile: {mobile},
                        password: {password}
                    };
                    showsnackbar("Password changed successfully");
                    setTimeout(function(){
                        navigate("/login");
                    },3000)
                }else{
                    showsnackbar("Password and Confirm Password must be same");
                }
            }
        };
        const validateEmail= (email) => {
            const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!(e.test(String(email).toLowerCase()))){
                window.alert("Enter a valid Email");
            }
        }
        const matchPassword=(pass,rePass)=>{
            if(pass!==rePass){
                return false;
            }else{
                return true;
            }
        }

        const sendotp = ()=>{
            setshowotp(true);
            setOtp('');
            Sendotp(mobile).then((data)=>{
                if(data.success){
                    setOtpsend(true);
                    showsnackbar(data.message);
                }else{
                    setOtpsend(false);	
                    showsnackbar('Something went wrong!!!');
                }
            })
        }
        
        const verifyOtp = (code)=>{
            console.log('in verify otp');
            if(otpsend){
                Verifyotp(code,mobile).then((data)=>{
                    if(data.success){
                        setshowotp(false);
                        showsnackbar(data.message);
                    }
                })
            }else{	
                showsnackbar('Phone number not verified');
            }
        }
  return (
        <>
        <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center',}} open={open}
                message={msg}
            />
            <Navbar/>
            <div style={{height:'655px', width:'100%'}} >
                <Bodycontainer>
                    <div style={{height:'64%', width:'26%',borderRadius:'5px',backgroundColor:'#0C3359',marginTop:'13%',marginLeft:'19%',padding:"1%"}}>
                        <div style={{display:'flex',flexDirection:'column',height:"100%", paddingLeft:'4%', border:'solid', borderColor:'#A47F38'}}>
                            <div style={{color:'white', fontFamily: 'Merriweather,serif', fontSize:'20px', paddingTop: '35%',  paddingLeft: '34%', }}>Propmath<br></br></div>
                            <div style={{color:'white', width: '101%',  paddingTop: '9%',  }}> Contrary to popular belief, Lorem Ipsum is not simply random text.   
                            </div>  
                        </div>
                   </div>
                    <Login>
                        <Item>
                            <div style={{ fontSize:'20px',color:'white'}}>Forget Password</div>
                        </Item>
                        <Item >
                            <CallIcon sx={{mr:1, color:'white'}}/>
                            <Textinput2 type='text' id='name' placeholder='Enter mobile no'  onChange={handelMobileChange}></Textinput2>
                            <button style={{width:'25%',fontSize:'12px',
                            marginLeft:'2px',border:'none',borderRadius:'2px'}}
                            onClick={sendotp}
                            >Send Otp</button>
                        </Item>
                        <Item>
                        <Item>
                            <label style={{color:'white' }} > Enter OTP</label>
                            {
                                showotp?<Otpinput type="text" value={otp} style={{backgroundColor: 'transparent', color:'white'}} maxLength={4} onChange={(e) => {
                                    setOtp(e.target.value);
                                    if(e.target.value.length == 4){
                                        verifyOtp(e.target.value)
                                    }
                                }}></Otpinput>
                                :<div style={{
                                    color:'green',
                                    marginLeft:'10px',
                                    fontWeight:'bold'
                                }}>Otp Verified</div>
                            }
                            
                        </Item>
                    </Item>

                        

                        <Item >
                            <LockIcon sx={{mr:1, color:'white'}}/>
                            <Textinput type='password' id='name' placeholder='Enter your new password' onChange={handelPasswordChange}></Textinput>
                        </Item>

                        <Item >
                            <LockIcon sx={{mr:1, color:'white'}}/>
                            <Textinput type='password' id='name' placeholder='Confirm your new password' onChange={NewpasswordChange}></Textinput>
                        </Item>
                        
                        

                        <Item>
                        <InputBox type ="submit" value="Submit" onClick={submit}></InputBox>
                        </Item>                   

                    </Login>
                   
                </Bodycontainer>

            </div>
            
        </>
    );
}

export default ForgetPassword;
