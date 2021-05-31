import axios from  'axios';



import{
Category_fail,
get_Categories,
update_Category,
delete_Category,
get_Category,
create_Category

} from './type'



export const get_All_Categories=()=>async dispatch=>{

try {

    const res=await axios.get('/api/category');


    dispatch({
        type:get_Categories,
        
        payload:res.data
    });

    
} catch (err) {


    dispatch({
        type:Category_fail,
        payload:{msg:err}

        // payload:{msg:err.response.statusText,status:err.response.status}
    });
    
}
   
}



export const  createCategory=(name)=>async dispatch=>{


    console.log(name)
try {


    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }


const res=await axios.post('/api/category',{name},config);

dispatch({

    type:get_Categories,
    payload:res.data
})
}

catch (err) {
    const errors=err.response.data.errors;
    if(errors){
        errors.forEach(error => 

            console.log(error)
            // dispatch(setAlert(error.msg,'danger'))
            
            );
    }
    
    dispatch({
        type:Category_fail,
        payload:{msg:err}
    });
    
}


}


//add sub category


export const addSubCategory=(formData,Id)=>async dispatch=>{



    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post(`/api/category/subGategory/${Id}`,formData,config);
    
    dispatch({
    
        type:get_Categories,
        payload:res.data
    });
    
    
    
    
    
    }
    
    catch (err) {
      
        console.log(err);
        
        dispatch({
            type:Category_fail,
          payload:{msg:err}

        });
        
    }
    




}







//add sub category book

export const addbook=(formData,category_id,book_id)=>async dispatch=>{



    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post(`/api/category/book/${category_id}/${book_id}`,formData,config);
    
    dispatch({
    
        type:get_Categories,
        payload:res.data
    });
        
    
    
    
    
    
    
    }
    
    catch (err) {
        // const errors=err.response.data.errors;
        // if(errors){
        //     errors.forEach(error => 
    
        //         console.log(error)
        //         // dispatch(setAlert(error.msg,'danger'))
                
        //         );
        // }
        console.log(err);
        
        dispatch({
            type:Category_fail,
          //  payload:{msg:err.response.statusText,status:err.response.status}
          payload:{msg:err}

        });
        
    }
    




}




//add sub category book

export const addarticle=(formData,category_id,articles_id)=>async dispatch=>{



    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post(`/api/category/articles/${category_id}/${articles_id}`,formData,config);
    
    dispatch({
    
        type:get_Categories,
        payload:res.data
    });
        
    
    
    
    
    
    
    }
    
    catch (err) {
        // const errors=err.response.data.errors;
        // if(errors){
        //     errors.forEach(error => 
    
        //         console.log(error)
        //         // dispatch(setAlert(error.msg,'danger'))
                
        //         );
        // }
        console.log(err);
        
        dispatch({
            type:Category_fail,
          //  payload:{msg:err.response.statusText,status:err.response.status}
          payload:{msg:err}

        });
        
    }
    




}














