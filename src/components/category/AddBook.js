import React ,{useState ,Fragment}from 'react';
import {Link, Redirect} from 'react-router-dom';
import {addbook} from '../../actions/Category';
import { connect } from 'react-redux';
function AddBook({addbook,subItem,item}) {

const[formData,setFormData]=useState({
    title:'',
    description:'',
    link:''

});
const{title,description,link}=formData;
const [img_upload,Setimg_upload]=useState('');


 const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });



const onSubmit= async e=>{
     e.preventDefault();


     addbook(title,description,link,img_upload,item,subItem);    
    
};

     return (
        <Fragment>

        <h5 class=" text-primary">Add New Book</h5>
      
        <form className="form"  onSubmit={e=>onSubmit(e)} >
        <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)} />

      
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


          <div className="form-group">
            <input
              type="text"
              placeholder="link"
              name="link"
              value={link}
              onChange={e=>onChange(e)}
                
            />
          </div>

        
          <input type="submit" class="btn btn-primary" value="Add" />
        </form>
     
      </Fragment>
    )
}

export default connect(null,{addbook})(AddBook)
