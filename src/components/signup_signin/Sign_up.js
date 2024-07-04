// import React, { useState } from 'react';
// import  "./signup.css";
//  const Sign_up = () => {
//   const [udata, setUdata] = useState({
//     fname: "",
//     email: "",
//     mobile: "",
//     password: "",
//     cpassword: ""
// });
// console.log(udata);
// const adddata = (e) => {
//   const { name, value } = e.target;
//   setUdata(() => {
//     return {
//         ...udata,
//         [name]:value
//     }
// })
// };
//   const senddata= async(e)=>{
//      e.preventDefault();
//      const {fname,email,mobile,password,cpassword} = udata;

//      const res = await fetch("register",{
//       method: "POST",
//         headers:{
//            "Content-type":"application/json"
//         },
//         body:JSON.stringify({
//           fname,email,mobile,password,cpassword
//         })
//      });
//       const data = await res.json();
//         // console.log(data,'->');
//   // }
//      if(res.status === 422 || !data){
//          alert("no data");
//      }else{
//          alert("data sucessfully added");
//      }

//   return (
//     <div className="sign_container">
//     <div className="sign_header">
//           <img src="./blacklogoamazon.png" alt="amazonlogo" />
//     </div>
//     <div className='sign_form'>
//            <form method='POST'>
//              <h1>Sign_Up</h1>
//              <div className="form_data">
//                             <label htmlFor="name">Your name</label>
//                             <input type="text" name="fname"
//                                 onChange={adddata}
//                                 value={udata.fname}
//                                 id="name" />
//                         </div>
//             <div className='form_data'>
//                <label htmlFor='email'>Email</label>
//                <input type='text'
//                onChange={adddata} 
//               // onChange={(e)=>setUdata({...udata,email:e.target.value})}  
//                  value={udata.email} name='email' id='email'></input>
//             </div>
//             <div className='form_data'>
//                <label htmlFor='number'>Mobile</label>
//                <input type='text'
//                onChange={adddata} 
//                value={udata.mobile} name='mobile' id='mobile'></input>
//             </div>
//             <div className='form_data'>
//                <label htmlFor=''>Password</label>
//                <input type='password' 
//                onChange={adddata}  
//                 value={udata.password} name='password' placeholder='At least 6 char' id='password' />
//             </div>
//             <div className="form_data">
//                             <label htmlFor="passwordg">Password again</label>
//                             <input type="password" name="cpassword"
//                                 onChange={adddata}
//                                 value={udata.cpassword}
//                                 id="passwordg" />
//                         </div>
//             <button className='signin_btn' onClick={senddata}>Continue</button>
//            </form>
//     </div>
   
// </div>
//   )
// }
// }
// export default Sign_up;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css";

const Sign_up = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;


    try {
      const res = await fetch("/Sign-up", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          fname, email, mobile, password, cpassword
        })
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
        console.log(data,"-->");
      if (!data) {
        // alert("No data received");
        toast.warn("invalid details",{
        position: "top-center",
    })
      } else {
        alert("Data successfully added");
    //     toast.success("data successfully added",{
    //     position: "top-right",
    // })
        setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
      }
    }
     catch (error) {
      console.error("Error during data submission:", error);
      alert("Error during data submission. Please try again.");
    }
  };

  return (
    <div className="sign_container">
      <div className="sign_header">
        <img src="./blacklogoamazon.png" alt="amazonlogo" />
      </div>
      <div className='sign_form'>
        <form method='POST'>
          <h1>Sign_Up</h1>
          <div className="form_data">
            <label htmlFor="name">Your name</label>
            <input type="text" name="fname"
              onChange={adddata}
              value={udata.fname}
              id="name" />
          </div>
          <div className='form_data'>
            <label htmlFor='email'>Email</label>
            <input type='text'
              onChange={adddata}
              value={udata.email} name='email' id='email'></input>
          </div>
          <div className='form_data'>
            <label htmlFor='number'>Mobile</label>
            <input type='text'
              onChange={adddata}
              value={udata.mobile} name='mobile' id='mobile'></input>
          </div>
          <div className='form_data'>
            <label htmlFor=''>Password</label>
            <input type='password'
              onChange={adddata}
              value={udata.password} name='password' placeholder='At least 6 char' id='password' />
          </div>
          <div className="form_data">
            <label htmlFor="passwordg">Password again</label>
            <input type="password" name="cpassword"
              onChange={adddata}
              value={udata.cpassword}
              id="passwordg" />
          </div>
          <button className='signin_btn' onClick={senddata}>Continue</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sign_up;

