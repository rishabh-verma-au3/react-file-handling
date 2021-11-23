import { initialState } from "./state"
import { createAsyncReducer } from "../store/reducers_store"
const init = (state,action)=>({
    ...state,
    comments:{
        status: action.status,
        data: [],
        error: ''
    }
})

const success = (state,action)=>({
    ...state,
    comments:{
        status: action.status,
        data: action.payload,
        error: ''
    }
})

const failure = (state, action) => ({
    ...state,
    comments:{
        status: action.status,
        data: [],
        error: action.payload
    }
})

// const comments_reducer = (state = initialState,action) =>{
//     switch(action.status){
//         case "COMMENT_API_Succcess":
//             state = {...state,
//                  comments:{
//                      status: 'SUCCEEDED',
//                      data: action.payload,
//                      error: ''
//                  }
//             }
//             return state;
//         case "COMMENT_API_Fail":
//                 state = {...state,
//                      comments:{
//                          status: 'FAILED',
//                          data: [],
//                          error: action.payload
//                      }
//                 }
//                 return state;
//         case "COMMENT_API_Initiated":
//                     state = {...state,
//                          comments:{
//                              status: 'INITIATED',
//                              data: [],
//                              error: ''
//                          }
//                     }
//                     return state;
//         default: return state
//     }
// }

var comments_reducer = createAsyncReducer(initialState,init,success,failure);

export {comments_reducer}