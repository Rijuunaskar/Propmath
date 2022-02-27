import React from 'react';
import styled from 'styled-components'
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Signimg from '../assets/signup.jpg';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import {Register,Sendotp,Verifyotp} from '../services/Restservice.js'
import {  useNavigate } from "react-router-dom";
import Navbar from './Navbar'


const Bodycontainer = styled.div`
    height: 658px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:center;
    overflow:hidden;
    
`
const Login = styled.div`
    background-color: #0C3359;    
    height:500px;
    width:375px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    margin-top:5%;
    padding:1%;
`
const Textinput = styled.input`

border: 1px solid ;
border-top:none;
border-left:none;
border-right:none;
background-color: transparent;
border-color: white;
color:white;
width:250px ;
&:focus{
    outline: none; 
}

&::placeholder {
    color: white;
  }
`
const Contactinput = styled.input`
-moz-appearance: textfield;
border: 1px solid ;
border-top:none;
border-left:none;
border-right:none;
background-color: transparent;
border-color: white;
color:white;
width:60%;

&:focus{
    outline: none; 
    -moz-appearance: textfield;
};

&:hover{
    -moz-appearance: textfield;
};

&::placeholder {
    color: white;
  }
`
const Item = styled.div`
    display: flex;
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
const InputBox = styled.input`
Background-color:#A47F38;
border:0;
width:112px;
height:30px;
border-radius:5px;
color:white;
`
const Signupimg =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
background-image:linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Signimg});
height:76%;
width:49%;
margin-top:5%; 
margin-right:6px
`



function Signup() {
    const navigate =  useNavigate();
    const [firstName, setFirstName] = React.useState(0);
    const [lastName, setLastName] = React.useState(0);
    const [email, setEmailid]=React.useState(0);
    const[password, setPassword] = React.useState(0);
    const[cnpassword, setCnpassword]= React.useState(0);
    const[contact,setContact]= React.useState(0);
    const[otp,setOtp] = React.useState('');
    const[org,setOrg] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
    const [showotp, setshowotp] = React.useState(true);
    const [otpsend, setOtpsend] = React.useState(false);



    const handelFnidChange = (event) =>{
        setFirstName(event.target.value);
    };
    const handelLnidChange = (event) =>{
        setLastName(event.target.value);
    };
    const handelEmailidchange=(event) =>{
        setEmailid(event.target.value);
    };

    const handelPasswordchange= (event)=>{
        setPassword(event.target.value);
    };

    const handelCnpasswordchange = (event)=>{
        setCnpassword(event.target.value);
    };

    const handelContactchange = (event) =>{
        setContact(event.target.value);
    };

    const handelOtpchange = (event) =>{
        setOtp(event.target.value);
    };

    const handelOrgchange = (event)=>{
        setOrg(event.target.value);
    }

const submit = () =>{
    if(validateEmail(email) && matchPassword(password,cnpassword) && !showotp){
        const postdata={
            firstName: firstName,
            lastName: lastName,
            email:email,
            password:password,
            mobile:contact
        }
        Register(postdata).then((data)=>{
            if(data.success){
                showsnackbar(data.message);
                localStorage.setItem('token',data.jwt)
                localStorage.setItem('contact',data.mobile)
                localStorage.setItem('islogin',true)
                navigate("/");
            }
        })
    }else{
        if(!validateEmail(email)){
            showsnackbar("Enter valid email")
        }else if(!matchPassword(password,cnpassword)){
            showsnackbar("Password and Confirm Password must be same")
        }else if(showotp){
            showsnackbar("Phone number not verified!!!")
        }
    }
    // validatePassword(password);
};


const showsnackbar =((msg)=>{
    setOpen(true);
    setMsg(msg);
    setTimeout(function(){
        setOpen(false);
    },3000)
})

const validateEmail= (email) => {
    const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!(e.test(String(email).toLowerCase()))){
        return false;
    }else{
        return true;
    }
}
const validatePassword= (pass) => {
    const p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!(p.test(String(pass)))){
        setOpen(true);
        setMsg("Enter Valid Password");
        setTimeout(function(){
            setOpen(false);
        },3000)
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
    Sendotp(contact).then((data)=>{
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
        Verifyotp(code,contact).then((data)=>{
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
            <Bodycontainer>
                <Signupimg >
                    <p style={{fontSize:'24px'}}>PROPMATH</p>
                    <p style={{width:'70%', textAlign:'center'}}>Sign Up with all correct details to get accurate recommendation of your prpperty thing.</p>
                </Signupimg>

                
                <Login>
                    <div style={{height:'100%',width:'100%',display:'flex', alignItems:'center', flexDirection:'column',
                    justifyContent:'space-evenly',border:'solid',borderWidth:'1px',borderColor: '#A47F38',}}>
                        <Item>
                            <p style={{color:'white', fontSize:'20px'}}>SIGN UP</p>
                        </Item>
                        <Item >
                            <FaceIcon sx={{mr:2, color:'white'}}/>
                            <Textinput type='text' id='name' placeholder='First Name' onChange={handelFnidChange}></Textinput>
                        </Item>
                        <Item> 
                            <FaceIcon sx={{mr:2,  color:'white'}}/>
                            <Textinput type='text' id='name' placeholder='Last Name'onChange={handelLnidChange}></Textinput>
                        </Item>
                        
                        <Item>
                        <EmailIcon sx={{mr:2,  color:'white'}}/>
                            <Textinput type='email' id='name' placeholder='Email' onChange={handelEmailidchange}></Textinput>
                        </Item> 

                        <Item>
                        <LockIcon sx={{mr:2,  color:'white'}}/>
                            <Textinput type='password' id='name' placeholder='Enter Password'                    onChange={handelPasswordchange}></Textinput>
                        </Item>

                        <Item>
                        <LockIcon sx={{mr:2,  color:'white'}}/>
                            <Textinput type='password' id='name' placeholder='Confirm Your Password' 
                            onChange={handelCnpasswordchange}></Textinput>
                        </Item> 



                        <Item>
                            <CallIcon sx={{mr:2,  color:'white'}}/> 
                            <Contactinput type='number' id='name' placeholder='Contact No'
                             onChange={handelContactchange}  ></Contactinput>
                             <button style={{width:'25%',fontSize:'12px',
                            marginLeft:'2px',border:'none',borderRadius:'2px'}}
                            onClick={sendotp}
                            >Send Otp</button>
                        </Item>

                        <Item>
                            <label style={{color:'white', }} > Enter OTP</label>
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

                        <Item>
                        <AccountBalanceIcon sx={{mr:2,  color:'white'}}/>
                        <Textinput type='text' id='name' placeholder='Organization Name' onChange={handelOrgchange}></Textinput>
                        </Item>

                        <Item>
                        <InputBox type ="submit" value="Submit" onClick={submit} ></InputBox>
                        </Item>
                   </div>
                </Login>
            </Bodycontainer>
           
        </>
    );
}

export default Signup;