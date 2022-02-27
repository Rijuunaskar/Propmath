import React from 'react';
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Logimgback from '../assets/loginimg.jpg';
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { WindowSharp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import {Login as restlogin} from '../services/Restservice.js'




const Bodycontainer = styled.div`
    background-image: url(${Logimgback});
    background-repeat: no-repeat;
    background-size:cover;
    width:100%;
    height: 657px;
    display:flex
`
const Login = styled.div`
    background-color: rgba(12, 51, 89, 0.95);

    display:flex;
    align-items: center;
    justify-content:center;
    height:60%;
    width:26%;
    flex-direction:column;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin-top: 12%;
    margin-left: 12%;

`
const Textinput = styled.input`


border:none;
padding-left:6%;
width:250px; 
height:33px;
color:white;

background-color:transparent;
&:focus{
    outline: none; 
}
&::placeholder {
    color: white;
  }
`
const Item = styled.div`
    display: flex;
    border:solid;
    border-width: 1px;
    border-color:white;
    margin-top:11%
`
const Item2 = styled.div`
    display: flex;
    border:solid;
    border-width: 1px;
    border-color:white;
    margin-top:2%
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
const Itemm = styled.div`
`


function LoginPage() {
    const navigate = useNavigate();
    const [userid, setUserid] = React.useState(0);
    const [password, setPassword] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState(false);

    const handelUseridChange = event =>{
        setUserid(event.target.value);
    };
    const handelPasswordChange = event =>{
        setPassword(event.target.value);
    };
    const submit =()=>{
        // validateEmail(userid);
        // validatePassword(password);
        const postData={
            mobile: userid,
            password: password
        };
        restlogin(postData).then((data)=>{
            console.log(data)
            if(data.success){
                showsnackbar(data.message);
                localStorage.setItem('token',data.jwt)
                localStorage.setItem('contact',data.mobile)
                localStorage.setItem('islogin',true)
                navigate("/");
            }else{
                console.log('-----------')
                showsnackbar("Please enter correct mobile number or password");
            }
        })

    };

    
    const validateEmail= (email) => {
        const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(e.test(String(email).toLowerCase()))){
            setOpen(true);
            setMsg("Enter Valid Email");
        }
    }
    const validatePassword= (pass) => {
        const p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!(p.test(String(pass)))){
            setOpen(true);
            setMsg("Enter Valid Password");
        }
    }

    const showsnackbar =((msg)=>{
        setOpen(true);
        setMsg(msg);
        setTimeout(function(){
            setOpen(false);
        },3000)
    })
  return (
        <>
             <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center',}} open={open}
                message={msg}
            />
            <Navbar/>
            <div style={{height:'655px', width:'100%'}} >
                <Bodycontainer>
                    <div style={{height:'60%', width:'26%',borderRadius:'5px',backgroundColor:'#0C3359',marginTop:'12%',marginLeft:'18%',padding:"2%"}}>
                        <div style={{display:'flex',flexDirection:'column',height:"100%", paddingLeft:'4%', border:'solid', borderColor:'#A47F38'}}>
                            <div style={{color:'white', fontFamily: 'Merriweather,serif', fontSize:'20px', paddingTop: '35%',  paddingLeft: '34%', }}>Propmath<br></br></div>
                            <div style={{color:'white', width: '100%',  paddingTop: '9%',paddingLeft:'5%'}}> Contrary to popular belief, Lorem Ipsum is not simply random text.   
                            </div>  
                        </div>
                   </div>
                    <Login>
                        <Itemm>
                            <div style={{ fontSize:'20px', color:'white', }}>USER LOGIN</div>
                        </Itemm>
                        <Item >
                            <AccountCircleIcon sx={{mr:1, marginTop: '5px', marginLeft: '15px', color:'white'}}/>
                            <Textinput type='text' id='name' placeholder='Registered mobile number' onChange={handelUseridChange}></Textinput>
                        </Item>

                        <Item2 >
                            <LockIcon sx={{mr:1,marginTop: '5px', marginLeft: '15px', color:'white', color:'white'}}/>
                            <Textinput type='text' id='name' placeholder='Password' onChange={handelPasswordChange}></Textinput>
                        </Item2>
                        
                        <Rem>
                        <input style={{textAlign: "center",margin:'5px'}} type="checkbox"></input>
                        <div style={{marginRight:'32px', color:'white'}}>Remember me</div>
                        <Link to="/ForgetPassword" style={{ color:'white',}}>Forget Password?</Link>
                        </Rem>

                        
                        <InputBox type ="submit" value="Submit" onClick={submit} ></InputBox>
                        

                        <div style={{display:'flex', width:'100%'}}>
                            <p style={{marginLeft:'15%', color:'white'}}>Don't have a account?</p>
                            <Link to="/SignUp" style={{ paddingLeft:'9%', color:'white'}}>Sign Up</Link>
                         
                        </div>               

                    </Login>
                   
                </Bodycontainer>

            </div>
        </>
    );
}

export default LoginPage;