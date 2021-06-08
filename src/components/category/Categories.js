import PropTypes from 'prop-types';
import React ,{Fragment,useEffect}from 'react'
import {connect} from 'react-redux';
import { get_All_Categories} from '../../actions/Category';
import SubCategory from './SubCategory'
import {Link} from 'react-router-dom';


const Categories = ({get_All_Categories,categoriesArray}) => {

    useEffect(
        async() => {
    await    get_All_Categories();
      

    
    }, []);
   
    console.log(categoriesArray)
    console.log("categoriesArray")


    return (
        <Fragment>
           


           <table id="customers">
  <tr>
    <th>name</th>
    <th>image</th>
    <th>description</th>
    {/* <th></th> */}
    {/* <th> sub category */}
      {/* <table>
        <tr>
          <td>name</td>
          <td>description</td>
          <td>image</td>

        </tr> */}
        {/* {categoriesArray&&categoriesArray.map(item=>(

            item.sub_category&& item.sub_category.map(subitem=>(
                <tr>
                <td>{subitem.name}</td>
                <td>{subitem.description}</td>
              </tr>

            ))
        ))}
        */}
      {/* </table> */}
    {/* </th> */}

  </tr>
  {categoriesArray
  &&
  categoriesArray.map(item=>(
 
//  <PostItem Key={post._id} post={post}/>
// console.log(item.name)
<tr>
    <td>{item.name}
    {/* <button></button>     */}
    <Link to={`/AddSub/${item._id}`} className="btn"> Add sub  </Link>
    </td>
    <td>  {item.image&&( <img
              class="round-img"
              

              
              src={`http://localhost:5000/api/upload/show/${item.image.filename}`}
              
              alt=""
            />)}</td>
   
    <td>{item.description}</td>
  </tr>
  

))}
  
{/* 
        <tr>
        <th>name</th>
    <th>image</th>
    <th>description</th>
    
        </tr> */}
    
 
</table>
            
</Fragment>


)
}

Categories.propTypes = {




}


const mapStateToProps =state=>({
    categoriesArray:state.category.categories


})

export default connect(mapStateToProps,{get_All_Categories}) (Categories);