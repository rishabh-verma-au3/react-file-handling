import { initialState } from "./state"
import { createAsyncReducer } from "../store/reducers_store"


const init = (state,action)=>({
    ...state,
    photos:{
        status: action.status,
        data: [],
        error: ''
    }
})

const success = (state,action)=>({
    ...state,
    photos:{
        status: action.status,
        data: action.payload,
        error: ''
    }
})

const failure = (state, action) => ({
    ...state,
    photos:{
        status: action.status,
        data: [],
        error: action.payload
    }
})

// const photos_reducer = (state = initialState,action) =>{
//     switch(action.type){
//         case "PHOTO_API_Succcess":
//             state = {...state,
//                  photos:{
//                      status: 'SUCCEEDED',
//                      data: action.payload,
//                      error: ''
//                  }
//             }
//             return state;
//         case "PHOTO_API_Fail":
//                 state = {...state,
//                      photos:{
//                          status: 'FAILED',
//                          data: [],
//                          error: action.payload
//                      }
//                 }
//                 return state;
//         case "PHOTO_API_Initiated":
//                     state = {...state,
//                          photos:{
//                              status: 'INITIATED',
//                              data: [],
//                              error: ''
//                          }
//                     }
//                     return state;
//         default: return state
//     }
// }

var photos_reducer = createAsyncReducer(initialState,init,success,failure);

export {photos_reducer}