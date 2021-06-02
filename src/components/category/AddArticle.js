import React ,{useState ,Fragment}from 'react';
import {Link, Redirect} from 'react-router-dom';
import {addarticle} from '../../actions/Category';
import { connect } from 'react-redux';
function AddArticle({addarticle,subItem,item}) {

const[formData,setFormData]=useState({
    title:'',
    description:'',

});
const{title,description}=formData;

 const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });



const onSubmit= async e=>{
     e.preventDefault();


     addarticle({title,description},item,subItem);    
    
};

     return (
        <Fragment>

        <h5 class=" text-primary">Add New Article</h5>
      
        <form className="form"  onSubmit={e=>onSubmit(e)} >
      
          <div className="form-group">
            <input type="text"
             placeholder="title"
             name="title"
              value={title}
              onChange={e=>onChange(e)}
            
            />
         
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="description"
              name="description"
              value={description}
              onChange={e=>onChange(e)}
                
            />
          </div>

          
        
          <input type="submit" class="btn btn-primary" value="Add" />
        </form>
     
      </Fragment>
    )
}

export default connect(null,{addarticle})(AddArticle)
