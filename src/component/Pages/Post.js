import React,{ useEffect} from "react";
import {connect} from "react-redux"
import Spinner from "../Spinner/index.js"
const Post = (props) => {
   

    //  const [data,setData] = useState([]);
     
     useEffect(()=>{
          document.title = "POSTS - POSTS"
          if (props.posts.status === 'NotStarted') {
            props.loadPost('1','2');
          }
        //   if (props.status === 'SUCCEEDED') {
        //         setData(props.data)
        //   }

     })
      

        if (props.posts.status === 'Success') {
            return (
                <>
                {
                    props.posts.data && props.posts.data.length ? 
                    props.posts.data.map((elemnt,key)=>{
                       return <div key={key} style={{"padding":"2em 2em"}}>
                           {elemnt.id}. &nbsp;{elemnt.body}
                           </div>
                    })
                    :
                    <></>
                }
                </>
            )
        }
        
        if (props.posts.status === 'Error') {
            return (<>
               {props.posts.error}
            </>)
        }

        if (props.posts.status === 'Initiated') {
            return (
                <><Spinner/></>
            )
        }

        return (
            <>Nothing to show</>
        )
        
    
}


const mapStatesToProps = (states,props)=>{
    return {
        // status: states.posts_reducer.posts.status,
        // data: states.posts_reducer.posts.data,
        // error: states.posts_reducer.posts.error
        posts: states.app.posts
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        loadPost : (a,b) => dispatch({
            // status:'Initiated',
            type:"HIT_POST",
            Payload: {a,b}
        })
    }
}


export default connect(mapStatesToProps,mapDispatchToProps)(Post)
