
import { get_Categories,Category_fail} from "../actions/type";

const initialState={

    
    categories:[],
    loading:true,

    error:{}

}


export  default function (state=initialState,action){


    const{type,payload}=action;



    switch(type){
 

        case get_Categories:

        return {
            ...state,
            categories:payload,
            loading:false
        }

           

        case Category_fail:

        return{
            ...state,
            error:payload,
            loading:false

        };



     
  

        default:
            return state;
    }
}