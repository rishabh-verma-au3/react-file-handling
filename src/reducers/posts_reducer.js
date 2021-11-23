import { initialState } from "./state"
import { createAsyncReducer } from "../store/reducers_store"

const init = (state,action)=>({
    ...state,
    posts:{
        status: action.status,
        data: [],
        error: ''
    }
})

const success = (state,action)=>({
    ...state,
    posts:{
        status: action.status,
        data: action.payload,
        error: ''
    }
})

const failure = (state, action) => ({
    ...state,
    posts:{
        status: action.status,
        data: [],
        error: action.payload
    }
})

// const posts_reducer = (state = initialState,action) =>{
//     switch(action.type){
//         case "Post_API_Succcess":
//             state = {...state,
//                  posts:{
//                      status: 'SUCCEEDED',
//                      data: action.payload,
//                      error: ''
//                  }
//             }
//             return state;
//         case "Post_API_Fail":
//                 state = {...state,
//                      posts:{
//                          status: 'FAILED',
//                          data: [],
//                          error: action.payload
//                      }
//                 }
//                 return state;
//         case "Post_API_Initiated":
//                     state = {...state,
//                          posts:{
//                              status: 'INITIATED',
//                              data: [],
//                              error: ''
//                          }
//                     }
//                     return state;
//         default: return state
//     }
// }

var posts_reducer = createAsyncReducer(initialState,init,success,failure);


export {posts_reducer}