import apiurl from "../config";
const Register = async(data)=>{
    let responsedata;
    await postData(apiurl+'/register', data)
    .then((response) => {
        responsedata = response; 
    });
    return responsedata;
}

const Login = async(data)=>{
    let responsedata;
    await postData(apiurl+'/login', data)
    .then((response) => {
        responsedata = response; 
    });
    return responsedata;
}

const Sendotp =  async(contact)=>{
    let responsedata;
    await getData(apiurl+'/sendotp?phonenumber='+contact)
    .then((response) => {
        responsedata = response; 
    });
    return responsedata;
}


const Verifyotp =  async(otp,contact)=>{
    let responsedata;
    await getData(apiurl+'/verifyotp?phonenumber='+contact+'&code='+otp)
    .then((response) => {
        responsedata = response; 
    });
    return responsedata;
}

const GetUser = async(contact)=>{
    let responsedata;
    await getDataAuth(apiurl+'/api/getuser?phonenumber='+contact)
    .then((response) => {
        responsedata = response; 
    });
    console.log(responsedata)
    return responsedata;
}

const getDataAuth = async(url = '')=>{
    try{
        let response = await fetch(url,preparegetdata(true))
        if (response.status >= 400 && response.status < 600) {
            return {success: false};
        }else{
            let responsedata = await response.json();
            return responsedata;
        }
    }  catch(error){
        console.warn(error)
    }
}

const postData = async(url = '', data = {})=> {
    // Default options are marked with *
    try{
        let response = await fetch(url, preparepostdata(data,false))
        if (response.status >= 400 && response.status < 600) {
            return {success: false,message: 'Something went wrong'};
        }else{
            let responsedata = await response.json();
            return responsedata;
        }
    }  catch(error){
        return {success: false,message: 'Something went wrong'};
    }
}

const getData = async(url = '')=>{
    try{
        let response = await fetch(url)
        if (response.status >= 400 && response.status < 600) {
            return {success: false,message: 'Something went wrong'};
        }else{
            let responsedata = await response.json();
            return responsedata;
        }
    }  catch(error){
        return {success: false,message: 'Something went wrong'};
    }
}




const preparegetdata = (token)=>{
    let body  = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
    if(token){
        let token  = localStorage.getItem("token");
        body.headers['Authorization']= `Bearer ${token}`;
    }
    console.log(body)
    return body;
}

const preparepostdata = (data,token)=>{
    let body  = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }
    if(token){
        let token  = localStorage.getItem("token");
    }
    return body;
}

export  {Register,Login,Sendotp,Verifyotp,GetUser};
