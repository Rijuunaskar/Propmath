import React from 'react';
import styled from 'styled-components'
import Signimg from '../assets/signup.jpg';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Navbar from './Navbar';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LanguageIcon from '@mui/icons-material/Language';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import {Query} from '../services/Restservice.js';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';




const Bodycontainer = styled.div`
    height: 872px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:center;
    overflow:hidden;
    background-image: linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,.3)),url(${Signimg});
`
const Result = styled.div`
background-color: #0c3359de;
    display:flex;
    align-items: center;
    justify-content:center;
    height:fit-to-content;
    width:377px;
    flex-direction:column;
    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin-top:5%;
    margin-left:7%;
`
const Predictor = styled.div`
background-color: #0c3359de;
    display:flex;
    align-items: center;
    justify-content:center;
    height:535px;
    width:365px;
    flex-direction:column;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin-top:5%;
    padding:1%
    

`
const Textinput = styled.input`

border: 1px solid ;
border-color:#0c33594f;
width:250px ;
&:focus{
    outline: none; 
}
`
const Item = styled.div`
    display: flex;
    
`

const InputBox = styled.input`

border:0;
width:112px;
height:30px;
border-radius:5px;
background-color:#A47F38;
color:white
`

const Sign = styled.img`

`


const Box = styled.div`
    border: solid;
    boeder-width: 1px;
    border-width: 1px;
    margin-left: 3%;
    width:48%;
    display:flex;
    justify-content:center;
    border-color: white;
    color:white;
    border-radius:3px
    
`

const Itemnew = styled.div`
display: flex;
width: 100%;
padding: 10px;
    
`

const Itemone = styled.div`
margin-bottom:27px;
padding-top: 15px;
`

const Div = styled.div`
display: flex;

    width: 50%;
    justify-content: center;
    border: solid;
    border-color:white;
    border-width: 1px;
    color:white;
    border-radius:3px
`
const Ptag =styled.div`
color:white;
font-size:24px
`
const Rem= styled.div`
display: grid;
grid-template-columns: auto auto auto;

`

function QueryPage() {

const[city,setCity] = React.useState(0);
const[chooselevel,setChooselevel] = React.useState(0);
const[textfirst,setTextfirst] = React.useState(0);
const[lat,setLat] = React.useState(0);
const[lon,setLon] = React.useState(0);
const[manualtext,setManualtext] = React.useState(0);
const[selectfloor,setSelectfloor] = React.useState(0);
const[highrise,setHighrise] = React.useState(false);
const[carparking,setCarparking] = React.useState(false);
const [open, setOpen] = React.useState(false);
const [msg, setMsg] = React.useState(false);

const[lat_lon_lvl,setLat_Lon_Lvl] = React.useState(false);
const[other_lvl,setOther_Lvl] = React.useState(false);

const handelCitychange = event =>{
    setCity(event.target.value);
};

const handelChooselevelchange = event =>{
    setChooselevel(event.target.value)
    if(event.target.value==='Lat-Lon level'){
        setLat_Lon_Lvl(true);
        setOther_Lvl(false);
    }else if(event.target.value==='Micromarket Level' || event.target.value==='Area Level'){
        setLat_Lon_Lvl(false);
        setOther_Lvl(true);
    }
}

const handelTextfirstchange = event =>{
    setTextfirst(event.target.value)
}
const handelLatchange = event =>{
    setLat(event.target.value)
}

const handelLonchange = event =>{
    setLon(event.target.value)
}

const handelManualtextchange = event =>{
    setManualtext(event.target.value)
}

const handelSelectfloorchange = event =>{
    setSelectfloor(event.target.value)
}
const handelHighrisechange = event =>{
    setHighrise(event.target.checked)
}

const handelCarparking = event =>{
    setCarparking(event.target.checked)
}


const submit = event =>{
    const postData={
        city:city,
        chooselevel:chooselevel,
        textfirst:textfirst,
        lat:lat,
        lon:lon,
        manualtext:manualtext,
        selectfloor:selectfloor,
        highrise:highrise,
        carparking:carparking,
    };
    console.log(postData)
    Query(postData).then((data)=>{
        console.log(data)
        if(data.success){
            console.log('success')
            showsnackbar(data.message);
        }else{
            console.log('-----------')
            showsnackbar("Some thing went wrong!!!");
        }
    })
};


const showsnackbar =((msg)=>{
    setOpen(true);
    setMsg(msg);
    setTimeout(function(){
        setOpen(false);
    },3000)
})
const cityData = [
    { value: 'howrah', name: 'Howrah',key:"1" },
    { value: 'kolkata', name: 'Kolkata',key:"2" },
    { value: 'darjeeling', name: 'Darjeeling',key:"3" },
    { value: 'baghajatin', name: 'Baghajatin',key:"4" }              
];
const level = [
    { value: 'Micromarket Level', name: 'Micromarket Level',key:"1" },
    { value: 'Area Level', name: 'Area Level',key:"2" },
    { value: 'Lat-Lon level', name: 'Lat-Lon level',key:"3" },      
];
const floor = [
    { value: 'Very Low', name: 'Very Low',key:"1" },
    { value: 'Low', name: 'Low',key:"2" },
    { value: 'Medium', name: 'Medium',key:"3" }, 
    { value: 'High', name: 'High',key:"4" }     
];
  return (
        <>
         <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center',}} open={open}
                message={msg}
            />
            <Navbar/>
            <Bodycontainer>

            <Predictor>
                <div style={{height:'100%', width:'100%', display:'flex', alignItems:'center', flexDirection:'column',
                    justifyContent:'space-evenly',border:'solid', borderWidth:'1px', borderColor: '#A47F38',}}>
                    <Item>
                        <Ptag>PREDICTOR</Ptag>
                    </Item>
                    <Item >
                        <AddBusinessRoundedIcon sx={{mr:1, color:'white'}}/>
                        {/* <select  type='dropdown' id='name' placeholder='Enter micro market name'></select > */}
                        {/* <InputLabel id="hihihi">Age</InputLabel>
                        <Select IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} placeholder="fdfdf" style={{backgroundColor:"white",width:"251px",height:"30px"}} labelId="hihihi" label="Age">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select> */}

                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                // IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} 
                                style={{backgroundColor:"white",width:"251px",height:"30px"}}
                                defaultValue={1}
                                onChange={handelCitychange}
                                >
                                <MenuItem disabled value={1}>Select City</MenuItem>
                                {cityData.map(data => {
                                    return <MenuItem value={data.value}  key={data.key}>{data.name}</MenuItem>;
                                })}
                                </Select>
                        </FormControl>
                    </Item>
                    <Item> 
                        <HomeWorkIcon sx={{mr:1,color:'white'}}/>
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                // IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} 
                                style={{backgroundColor:"white",width:"251px",height:"30px",}}
                                defaultValue={1}
                                onChange={handelChooselevelchange}
                                >
                                <MenuItem disabled value={1}>Choose Your Level</MenuItem>
                                {level.map(data => {
                                    return <MenuItem value={data.value}  key={data.key}>{data.name}</MenuItem>;
                                })}
                                </Select>
                        </FormControl>
                    </Item>
                    {other_lvl ?
                    <>
                        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <HomeWorkIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px',width:'72%',}} placeholder='hi' onChange={handelTextfirstchange}></input>
                        </div>
                    </> 
                    : null}

                    {/* <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <HomeWorkIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px',width:'72%',}} placeholder='hi' onChange={handelTextfirstchange}></input>
                    </div> */}

                    {lat_lon_lvl ? 
                    <>
                        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <LanguageIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px', width:'72%'}} placeholder='Latitude' onChange={handelLatchange}></input>
                        </div>

                        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                            <LanguageIcon sx={{mr:1,color:'white'}}/>
                            <input style={{border:'none', height:'30px', borderRadius:'4px', width:'72%'}} placeholder='Longitude' onChange={handelLonchange}></input>
                        </div>
                    </> 
                    : null}

                    {/* <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <LanguageIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px', width:'72%'}} placeholder='Latitude' onChange={handelLatchange}></input>
                    </div>

                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <LanguageIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px', width:'72%'}} placeholder='Longitude' onChange={handelLonchange}></input>
                    </div> */}
                    
                    {/* <Item>
                    
                     <FormControl fullWidth> 
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} 
                                style={{backgroundColor:"white",width:"251px",height:"30px"}}
                                defaultValue={1}
                                >
                                <MenuItem disabled value={1}>Enter Manual Area</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                        </FormControl> 
                       
                    </Item>  */}

                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <ApartmentIcon sx={{mr:1,color:'white'}}/>
                        <input style={{border:'none', height:'30px', borderRadius:'4px', width:'72%', color:'black'}} placeholder='Enter Manual Area' onChange={handelManualtextchange}></input>
                    </div>

                    {/* <Item>
                        <CallIcon sx={{mr:1,color:'white'}}/> 
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>
                                style={{backgroundColor:"white",width:"251px",height:"30px"}}
                                defaultValue={1}
                                >
                                <MenuItem disabled value={1}>High Rise</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                        </FormControl>
                    </Item> */}

                    <Item>
                        <CorporateFareOutlinedIcon sx={{mr:1,color:'white'}}/> 
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                // IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} 
                                style={{backgroundColor:"white",width:"251px",height:"30px"}}
                                defaultValue={1}
                                onChange={handelSelectfloorchange}
                                >
                                <MenuItem disabled value={1}>Select Floor Field</MenuItem>
                                {floor.map(data => {
                                    return <MenuItem value={data.value}  key={data.key}>{data.name}</MenuItem>;
                                })}
                                </Select>
                        </FormControl>
                    </Item>

                    <Item>
                        {/* <CallIcon sx={{mr:1,color:'white'}}/> 
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                IconComponent={()=>(<KeyboardArrowDownOutlinedIcon/>)} 
                                style={{backgroundColor:"white",width:"251px",height:"30px"}}
                                defaultValue={1}
                                >
                                <MenuItem disabled value={1}>Select high area</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                        </FormControl> */}

                    <div style={{display:'flex', width:'100%'}}>
                        <input style={{textAlign: "center",margin:'5px'}} type='checkbox'
                         onChange={handelHighrisechange}></input>
                        <div style={{color:'white', marginRight:'60px'}}>High Rise</div>
                        <input style={{textAlign: "center",margin:'5px'}} type='checkbox' onChange={handelCarparking}></input>
                        <div style={{color:'white'}}>Car Parking</div>
                    </div>
                    </Item>
                   

                    


                    <Item>
                    <InputBox type ="submit" value="Submit" onClick={submit} ></InputBox>
                    </Item>
                </div>    
                </Predictor>
                
                <Result>
                    <Itemone>
                        <Ptag>RESULT</Ptag>
                    </Itemone>
                    <Itemnew >
                        <Div>Result</Div>
                        <Box></Box>
                        
                    </Itemnew>

                    <Itemnew>
                        <Div>Estimated Rent</Div>
                        <Box></Box>
                    </Itemnew>
                    
                    <Itemnew>
                        <div style={{marginLeft:'7%',width:'37%', border:'solid', borderWidth: '1px', justifyContent: 'center', display:'flex', backgroundColor:'white', borderRadius:'5px' }}>Entered Field</div>
                        <div style={{marginLeft:'14%',width:'37%', border:'solid', borderWidth: '1px', justifyContent: 'center', display:'flex',  backgroundColor:'white', borderRadius:'5px' }}> Entered Value</div>
                    </Itemnew> 

                    <Itemnew >
                        <Div>Manual Area</Div>
                        <Box></Box>
                    </Itemnew>

                    
                    <Itemnew >
                        <Div>High Rise</Div>
                        <Box></Box>
                    </Itemnew>

                    <Itemnew >
                        <Div>Builder's Name</Div>
                        <Box></Box>
                    </Itemnew>
                    
                    <Itemnew >
                        <Div>Building status</Div>
                        <Box></Box>
                    </Itemnew>

                    <Itemnew >
                        <div style={{marginLeft:'5%', width:'90%', border:'solid', borderWidth: '1px', justifyContent: 'center', display:'flex', backgroundColor:'white', borderRadius:'5px' }}>Related information</div>
                        
                    </Itemnew>

                    <Itemnew >
                        <Div>City</Div>
                        <Box></Box>
                    </Itemnew>

                    <Itemnew >
                        <Div>Micromarket</Div>
                        <Box></Box>
                    </Itemnew>

                    
                </Result>


                
                
            </Bodycontainer>
           
        </>
    );
}

export default QueryPage;