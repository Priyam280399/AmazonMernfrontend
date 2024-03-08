import {React,useContext, useEffect, useState} from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material-next/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import Rightheader from './Rightheader';
import { Logincontext } from '../context/Contextprovider';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbaar = () => {
  const { account, setAccount } = useContext(Logincontext);
  console.log(account);
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const [text, setText] = useState("");
     console.log(text);
    const [liopen, setLiopen] = useState(true);
    const  {products}  = useSelector(state => state.getproductsdata);
  const [dropen, setDropen] = useState(false);
  const cartItemsCount = account?.carts?.length || 0;

  const getdetailsvaliduser = async () => {
    try {
      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        setAccount(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error fetching valid user details:", error);
    }
  };

  const handleOpen = () => {
    setDropen(true);
  };

  const handleCloseDrawer = () => {
    setDropen(false);
  };

  const logoutUser = async () => {
    try {
      const res2 = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res2.status === 201) {
        const data2 = await res2.json();
        console.log(data2);
        alert("logout");
        // toast.success("user logout",{
        //                 position: "top-center",
        //             })
        history("/");
        setAccount(false);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  };

     const getText = (iteams)=>{
       setText(iteams);
        setLiopen(false)
     }

  useEffect(() => {
    getdetailsvaliduser();
  }, []);

  return (

    <header>
      <nav>
           <div className='left'>
           <IconButton className="hamburgur" onClick={handleOpen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                      {/* here define the right header */}
                      <Drawer open={dropen} onClose={handleCloseDrawer}>
                        <Rightheader Logclose={handleCloseDrawer}  logoutUser={logoutUser}/>
                    </Drawer>
            <div className='navlogo'>
           <NavLink to="/"><img src= './amazon_PNG25.png' alt="" /></NavLink>
            </div>
            <div className="nav_searchbaar">
                        <input type="text" name=""
                        onChange={(e)=>getText(e.target.value)}
                         id=""
                         placeholder='Search for products'/>
                           
                        <div className="search_icon">
                             <SearchIcon id="search"/>
                            <i className="fas fa-search" id="search"></i>
                        </div>
                        {
                          text &&
                            <List className='extrasearch' hidden={liopen}>
                              {
                                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                  <ListItem>
                                  <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                      {product.title.longTitle}
                                  </NavLink>
                              </ListItem>
                                ))
                              }

                            </List>
                        }
            
           </div>
           </div>
           <div className='right'>
            <div className='nav-btn'>
            <NavLink to="./Sign-in" style={{color:"#fff"}} >signin</NavLink>
           </div>
           <div className="cart_btn">
        
              {
                 account ?      <NavLink to="/buynow"> <Badge badgeContent={cartItemsCount} color="primary">
                 <ShoppingCartIcon id="icon"/>
             </Badge>
             </NavLink> :   <NavLink to="/Sign-in"> <Badge badgeContent={0} color="primary">
                 <ShoppingCartIcon id="icon"/>
             </Badge>
             </NavLink>
              }
          <ToastContainer />
            
          
             <p>Cart</p>
           </div>
           {
             account ?  <Avatar className='avtar2'
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             >{account.fname[0].toUpperCase()}</Avatar>: 
             <Avatar className='avtar'
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             ></Avatar> 
           }
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
           account ?  <MenuItem onClick={handleClose} onClick={logoutUser}><LogoutIcon style={{fontSize:16,marginRight:3}}/>Logout</MenuItem>: ""
        }
       
      </Menu>

          
           </div>
          
           
      </nav>
      
    </header>
  )
}

export default Navbaar