// https://redux.js.org/tutorials/fundamentals/part-6-async-logic
import axios from "axios"

export var random = (storeAPI)=>(next)=>(action)=>{
         

    next(action)
}
export var loadPost = (storeAPI)=>(next)=>async(action)=>{
    // if (typeof action === 'function') {
    //     // return action(storeAPI.dispatch, storeAPI.getState)
    //   }
    if (action.type === 'HIT_POST') {
        storeAPI.dispatch({
            status: 'Initiated',
            type: 'POST_REDUCER',
        })
                    await axios.get("https://jsonplaceholder.typicode.com/posts")
                        //   .then(data=>data.json)
                        .then(res=>{
                            // setData(res.data);
                            // setLoading(false)
                            storeAPI.dispatch({
                                // type: 'PHOTO_API_Initiated',
                                status: 'Success',
                                type: 'POST_REDUCER',
                                payload: res.data
                            })
                        })
                        .catch(err=>{
                            storeAPI.dispatch({
                                // type: 'PHOTO_API_Initiated',
                                status: 'Error',
                                type: 'POST_REDUCER',
                                payload: (err && err.massage) || 'Some internal error'
                            })
                        })
   
    }

    next(action)
}


export var loadComment = (storeAPI)=>(next)=>async(action)=>{
    if (action.type === 'HIT_COMMENT') {
        storeAPI.dispatch({
            status: 'Initiated',
            type: 'COMMENT_REDUCER',
        })
                    await axios.get("https://jsonplaceholder.typicode.com/comments")
                        //   .then(data=>data.json)
                        .then(res=>{
                            storeAPI.dispatch({
                                status: 'Success',
                                type: 'COMMENT_REDUCER',
                                payload: res.data
                            })
                        })
                        .catch(err=>{
                            storeAPI.dispatch({
                                status: 'Error',
                                type: 'COMMENT_REDUCER',
                                payload: (err && err.massage) || 'Some internal error'
                            })
                        })
    }
    next(action)
}

export var loadPhoto = (storeAPI)=>(next)=>async(action)=>{
    if (action.type === 'HIT_PHOTO') {
                    storeAPI.dispatch({
                        status: 'Initiated',
                        type: 'PHOTO_REDUCER',
                    })
                    await axios.get("https://jsonplaceholder.typicode.com/photos")
                        //   .then(data=>data.json)
                        .then(res=>{
                            storeAPI.dispatch({
                                status: 'Success',
                                type: 'PHOTO_REDUCER',
                                payload: res.data
                            })
                        })
                        .catch(err=>{
                            storeAPI.dispatch({
                                status: 'Error',
                                type: 'PHOTO_REDUCER',
                                payload: (err && err.massage) || 'Some internal error'
                            })
                        })
    }
    next(action)
}
