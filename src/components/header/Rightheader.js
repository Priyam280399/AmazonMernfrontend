import { React,useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { Logincontext } from '../context/Contextprovider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css"
import LogoutIcon from '@mui/icons-material/Logout';
const Rightheader = ({Logclose, logoutUser}) => {
    const {account,setAccount} = useContext( Logincontext);
  return (
    <>
    <div className='rightheader'>
        <div className='right_nav'> 
        {
             account ?  <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar>: 
             <Avatar className='avtar'></Avatar> 
           }
          {account ? <h3>Heelo , {account.fname.toUpperCase()}</h3>:""}
         </div>
         <div className='nav_btn' onClick={()=>Logclose()}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop By category</NavLink>
                <Divider style={{width:'100%', marginLeft:'-20px'}}/>
                <NavLink to="/">today's deal</NavLink>
                {
                    account ? <NavLink to="/buynow">Your orders </NavLink> : <NavLink to="/login">Your orders </NavLink>
                }
                 <Divider style={{width:'100%', marginLeft:'-20px'}}/>
                 <div className='flag'>
                 <NavLink to="/">Setting</NavLink>
                 <img src='/india.png' alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                 </div>
                 {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={() => logoutUser()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : <NavLink to="/Sign-in">Sign in</NavLink>
                }


         </div>
    </div>
    </>
  )
}

export default Rightheader