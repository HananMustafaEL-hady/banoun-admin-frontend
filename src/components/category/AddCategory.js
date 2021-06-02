// import React ,{useState ,Fragment}from 'react'
// import {createCategory} from '../../actions/Category';
// import { connect } from 'react-redux';

// const AddCategory = ({createCategory}) => {

//     const[formData,setFormData]=useState({ name:'', description:''});

//     const{name, description}=formData;
// const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });

// const onSubmit= async e=>{
//     e.preventDefault();
//     createCategory(name, description);    
// };

//     return (
//         <Fragment>
//         <h1 class="large text-primary">اضافة قسم جديد</h1>
    
//         <form className="form"  onSubmit={e=>onSubmit(e)} >
      
//           <div className="form-group">
//             <input type="name"
//              placeholder="قسم جديد"
//              name="name"
//               value={name}
//               onChange={e=>onChange(e)}
            
//             />
         
//           </div>
        
//           <input type="submit" class="btn btn-primary" value="اضافة" />
//         </form>
      
//       </Fragment>
//     )
// }

// export default connect(null,{createCategory})(AddCategory)
