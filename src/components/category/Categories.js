import PropTypes from 'prop-types';
import React ,{Fragment,useEffect}from 'react'
import {connect} from 'react-redux';
import { get_All_Categories} from '../../actions/Category';
import SubCategory from './SubCategory'


const Categories = ({get_All_Categories,categoriesArray}) => {

    useEffect(
        async() => {
    await    get_All_Categories();
      

    
    }, []);
   
    console.log(categoriesArray)
    console.log("categoriesArray")


    return (
        <Fragment>
           


            
</Fragment>


)
}

Categories.propTypes = {




}


const mapStateToProps =state=>({
    categoriesArray:state.category.categories


})

export default connect(mapStateToProps,{get_All_Categories}) (Categories);