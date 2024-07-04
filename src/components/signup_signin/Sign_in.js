import React,{useState,useContext} from 'react';
import  "./signup.css";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from '../context/Contextprovider';

const Sign_in = () => {

  const [logdata,setData]= useState({
         email:"",
         password:""
         
  });
  const {account,setAccount} = useContext( Logincontext);
  console.log(logdata);
  const adddata = (e)=>{
       const {name,value} = e.target;
       setData(()=>{
         return{
             ...logdata,
             [name]:value
         }
       })
  };
  // const setCookie = ( value) => {
  //   const expires = new Date();
  //   expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000);
  //   document.cookie = `token=${value};expires=${expires.toUTCString()};path=/`;
  // };
    const senddata = async(e)=>{
      e.preventDefault();
      const {email,password}=logdata;
      const res = await fetch("/Sign-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
           email, password
        })
      });
        console.log(res,"--->>");
        const data = await res.json();
          console.log(data);
          // setCookie(data.tokens[0].token);
          if(res.status === 400 || !data){
            console.log("invalid details");
            toast.warn("invalid details",{
              position: "top-center",
          })
          }else{
            toast.success("user valid",{
              position: "top-center",
          })
            console.log("data valid");
               setAccount(data)
             setData({...logdata,email:"",password:""});
          }
    }
  return (
   <>
   <section>
       <div className="sign_container">
           <div className="sign_header">
                 <img src="./blacklogoamazon.png" alt="amazonlogo" />
           </div>
           <div className='sign_form'>
                  <form method='POST'>
                    <h1>Sign_In</h1>
                    <div className='form_data'>
                      <label htmlFor=''>Email</label>
                      <input type='text'
                             onChange={adddata}
                             value={logdata.email} name='email' id='email'></input>
                   </div>
                   <div className='form_data'>
                      <label htmlFor=''>Password</label>
                      <input type='password' name='password' onChange={adddata} value= {logdata.password} placeholder='At least 6 char' id='password' />
                   </div>
                   <button className='signin_btn' onClick={senddata}>Continue</button>
                  </form>
                  </div>
                    <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button><NavLink to="/Sign-up">Create your Amazon Account</NavLink></button>
                </div>
            </div>
            <ToastContainer />
   </section>
   </>
  )
}

export default Sign_in;

