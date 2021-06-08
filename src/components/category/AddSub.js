import React ,{useState ,Fragment}from 'react'
import {addSubCategory} from '../../actions/Category';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


const AddSub = ({addSubCategory,match}) => {

    const[formData,setFormData]=useState({ name:'', description:'',});

    const{name,description}=formData;
    const [img_upload,Setimg_upload]=useState('');
    console.log(match.params.cate_id)
const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });

const onSubmit= async e=>{
    e.preventDefault();
    addSubCategory(name,description,img_upload,match.params.cate_id);  

  
};

    return (
        <Fragment>
        <h1 class=" text-primary">Add new Sub Category
        </h1>
    
        <form className="form"  onSubmit={e=>onSubmit(e)} >
        <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)} />

      
          <div className="form-group">
            <input type="name"
             placeholder="الاسم "
             name="name"
              value={name}
              onChange={e=>onChange(e)}
            
            />
              <input type="description"
             placeholder="الوصف"
             name="description"
              value={description}
              onChange={e=>onChange(e)}
            
            />
         
          </div>
        
          <input type="submit" class="btn btn-primary" value="اضافة" />
        </form>
      
      </Fragment>
    )
}

export default connect(null,{addSubCategory})(AddSub)
