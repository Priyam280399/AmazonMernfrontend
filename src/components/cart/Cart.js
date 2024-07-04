import React, { useContext, useEffect, useState } from 'react';
import "./cart.css";
import { Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { Logincontext } from '../context/Contextprovider';


const Cart = () => {
  const { id } = useParams("");
  const history = useNavigate("");
const {account,setAccount} = useContext( Logincontext);
  const [inddata, setInddata] = useState("");
console.log("payload",inddata);
  
    const getinddata = async () => {
      try {
        const res = await fetch(`/getproductsone/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();

        if (res.status !== 201) {
          console.log("no data available");
        } else {
          console.log("getdata");
          setInddata(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      setTimeout(getinddata, 1000)
  }, [id]);


  const getCookieValue = () => {
    const cookies = document.cookie.split("; ");
    console.log(cookies);
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === 'token') {
        return cookieValue;
      }
    }
    return null;
  };

  // add cart function
  const addtocart = async (id) => {
    // const token = getCookieValue();
    // console.log(token,id);
    const checkres = await fetch(`/addcart/${id}`, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inddata
      }),
      credentials: "include"
    });
    // console.log("=====>", checkres);
    const data1 = await checkres.json();
    console.log(data1);
    if (checkres.status === 401 || !data1) {
      console.log("user invalid");
      alert("user invalid");
    } else {
      alert("data added in your cart");
       history("/buynow");
      setAccount(data1);
    }
  }
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
          <img src={inddata.detailUrl} alt='cart' />
          <div className='cart_btn'>
            <button className='cart_btn1' onClick={() => addtocart(inddata.id)}>Add to cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='right_cart'>
          <h3>{inddata.title?.shortTitle}</h3>
          <h4>{inddata.title?.longTitle}</h4>
          <Divider />
          <p className='mrp'>₹{inddata.price?.mrp}</p>
          <p>Deal Of the Day:<span style={{ color: "#B12704" }}>₹{inddata.price?.cost}</span></p>
          <p>You Save:<span style={{ color: "#B12704" }}>₹{inddata.price?.mrp - inddata.price?.cost}({inddata.price?.discount})</span></p>
          <div className='discount_box'>
            <h5>Discount: <span style={{ color: "#111" }}>{inddata.discount}</span></h5>
          </div>
          <h4>Free Delivery: <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span> Details</h4>
          <p>Fastest Delivery:<span style={{ color: '#111', fontWeight: 600 }}>Tomorrow: 11 AM</span></p>
          <p className='description'><span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
        </div>
      </div>
      
      {!inddata ? <div className="circle">
                <CircularProgress/>
                <h2> Loading....</h2>
            </div> : ""}
    </div>
  )
}
  

export default Cart


