import React ,{Fragment,useEffect}from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "../sidebar/Sidebar";
import { get_All_Categories} from '../../actions/Category';

// import {logout} from "../../actions/auth"



export const Navbar = ( {get_All_Categories,sub_category} ) =>  {
  useEffect(
    async() => {
await    get_All_Categories();
  


}, []);


const item = [
  {
     name: "الصفحة الرئيسية",
      Icon: HomeIcon },
  
  "divider",
  {
    name: "الاقسام",
    label: "الاقسام",
    // Icon: SettingsIcon,
    sub_category:sub_category
  }
];


console.log(item)


  return (
      <div>
     <Link to='/addCategory'><i class="fas fa-plus-square"></i></Link>   
           <Sidebar items={item}/>
    {/* {
      
    categoriesArray&&


    } */}

      
      </div>
  )
}


const mapStateToProps=state=>({
  sub_category:state.category.categories


 });
export default  connect(mapStateToProps,{get_All_Categories})(Navbar)  ;

// export default  Navbar;