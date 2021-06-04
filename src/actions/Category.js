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

export const addbook=(title,description,link,img_upload,category_id,sub_id)=>async dispatch=>{
    const formData = new FormData();

    
        formData.append('title',title);
        formData.append('description',description);
        formData.append('link',link);

        if(img_upload){

            let img = img_upload.target.files[0];
            console.log(img);
           
              
             formData.append('image', img);
             console.log(formData);
        
            }


    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post(`/api/category/book/${category_id}/${sub_id}`,formData,config);
    
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

export const addarticle=(title,description,img_upload,category_id,articles_id)=>async dispatch=>{
    const formData = new FormData();

    
    formData.append('title',title);
    formData.append('description',description);
  

    if(img_upload){

        let img = img_upload.target.files[0];
        console.log(img);
       
          
         formData.append('image', img);
         console.log(formData);
    
        }



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







// // add image 



// export const Upload_img=(userid,img_upload)=>async dispatch=>{

//     console.log(img_upload);
// //     var img='';

// // // let    img = img_upload.target.files[0];
// // // console.log(img);

// if(img_upload){
//     let img = img_upload.target.files[0];
//     console.log(img);
   
      
//      const formData = new FormData();
//      formData.append('image', img);
//      console.log(formData);

//     try {
    
//         const res=await axios.post(`/api/upload/user/${userid}`,formData);
    
    
//                dispatch({
//             type:uploadimg,
//             payload:res.data
//         });
    
        
//     } catch (err) {
    
    
//         dispatch({
//             type:user_fail,
//             payload:{msg:err}
    
//         });
        
//     }
       

// }

// }








