import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import  './home.css'
import Slide from './Slide';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";
const Maincomp = () => {
     
    const [items,setItems]= useState([])
   
  // console.log(products,"products");

  const dispatch = useDispatch();
 

  const  {products}  = useSelector(state => state.getproductsdata);
    // if (products) {
            //  setItems([...products])
    // }
                console.log(products,"priyam")
      //   useEffect(() => {
      //   //  const data= getProducts(dispatch);
      //   // setItems(products);

      //    console.log(products,"products");
      //    console.log("hello"); 

      // }, [])

useEffect(() => {
  // const data= getProducts(dispatch);
   const data= getProducts(dispatch);
  // console.log(data,"data");
//  setItems(products);
  console.log(products,"priyam");

}, [])

  return (
    <div className='home_section'>
         <div className='banner_part'>
              <Banner />
         </div>
         <div className="slide_part">
                    <div className="left_slide">
                        {products ? <Slide title ="Deal of the day"   products={products}/> : null}
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>
               {products ? <Slide title="Today,s Deal"  products={products}/> : null}
                <div className="center_img">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                </div>
               {products ? <Slide title="Best seller"  products={products}/> : null}
               {products ? <Slide title="Upto 80% off"   products={products}/> : null}
                
                
    </div>
  )
}

export default Maincomp