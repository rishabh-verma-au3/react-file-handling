import { initialState } from "../reducers/state";
import { posts_reducer} from "../reducers/posts_reducer";
import {comments_reducer} from "../reducers/comments_reducer"
import {photos_reducer} from "../reducers/photos_reducer"

export  function createAsyncReducer(initialState, init, success, failure, reset=null){
    return (state =  initialState, action) => {
        switch (action?.status) {
            case 'Initiated':
                 return init(state,action);
            case 'Success':
                    return success(state,action);
            case 'Error':
                 return failure(state,action);
                //  case 'Initiated':
                //  return init(state,action);    
            default:
                 return state;
        }
    }
}

const reducer = (initialState) => {
     const map1 = {
        POST_REDUCER:posts_reducer,
        COMMENT_REDUCER: comments_reducer,
        PHOTO_REDUCER: photos_reducer
     }
     return (state = initialState, action) => {
        //  console.log(map1[action.type.toString()]);
         const mappedReducer = map1[action.type.toString()];
        //  console.log(mappedReducer);
         return mappedReducer ? mappedReducer(state,action) : state;
        // switch (action.type){
        //     case 'POST_REDUCER':
        //         return posts_reducer(state,action)
        //     case 'COMMENT_REDUCER':
        //         return comments_reducer(state,action);
        //     case 'PHOTO_REDUCER':
        //         return photos_reducer(state,action);
        //     default: return state;
        // }
    
        //  const mappedReducer = map[action.type];
        //  return mappedReducer ? mappedReducer(state,action) : state;
     }

}

export const appReducer = reducer(initialState);
