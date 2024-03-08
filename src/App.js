
import {React, useEffect} from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up.js';
import Cart from './components/cart/Cart.js';
import NoPage   from  './components/signup_signin/NoPage.js';
import Buynow from './components/buynow/Buynow.js';
import { getProducts } from './components/redux/actions/action.js';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(false);
     useEffect(()=>{
           setTimeout(()=>{
            setData(true);
           },2000)
     },[])
  return (
    <>
    {
      data ? (
        <>
         <Navbaar />
        <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/getproducts" element={<getProducts />} />
        <Route path="/Sign-in" element={<Sign_in />} />
        <Route path="/Sign-up" element={<Sign_up />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
  <Footer />
        </>
      ): (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      )
    }

    
    </>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbaar from './components/header/Navbaar';
// import Newnav from './components/newnavbaar/Newnav';
// import Maincomp from './components/home/Maincomp';
// import Footer from './components/footer/Footer';
// import Sign_in from './components/signup_signin/Sign_in';
// import Sign_up from './components/signup_signin/Sign_up';
// import NoPage from './components/signup_signin/NoPage';

// function App() {
//   return (
//     <Router>
//        <>
//       <div>
//         <Navbaar />
//         <Newnav />
//         <Routes>
//           <Route path="/" element={<Maincomp />} />
//           <Route path="/sign-in" element={<Sign_in />} />
//           <Route path="/sign-up" element={<Sign_up />} />
//           <Route path="/*" element={<NoPage />} />
//         </Routes>
//         <Footer />
      
//       </div>
//       </>
//     </Router>
//   );
// }

// export default App;

// import Signup from './components/signup_signin/SignUp';
// import Sign_in from './components/signup_signin/Sign_in';
// import Cart from './components/cart/Cart';
// import Buynow from './components/buynow/Buynow';
// import './App.css';
// import { useEffect, useState } from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import { Switch, Route } from "react-router-dom";


// function App() {
//   const [data, setData] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setData(true);
//     }, 2000);
//   }, [])


//   return (
//     <>
//       {
//         data ? (
//           <>
//             <Navbaar />
//             <Newnav />
//             <Switch>
//               <Route exact path="/">
//                 <Maincomp />
//               </Route>
//               <Route exact path="/signup">
//                 <Signup />
//               </Route>
//               <Route exact path="/login">
//                 <Sign_in />
//               </Route>
//               <Route exact path="/getproductsone/:id">
//                 <Cart />
//               </Route>
//               <Route exact path="/buynow">
//                 <Buynow />
//               </Route>
//             </Switch>
//             <Footer />
//           </>
//         ) : (
//           <div className="circle">
//             <CircularProgress />
//             <h2> Loading....</h2>
//           </div>
//         )
//       }

//     </>
//   );
// }
