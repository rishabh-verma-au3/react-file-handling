
import React,{ useEffect} from "react";
import {connect} from "react-redux"
import Spinner from "../Spinner/index.js"

const Comment = (props) => {

 //  const [data,setData] = useState([]);
     
 useEffect(()=>{
     document.title = "COMMENTS - POSTS"
     if (props.comments.status === 'NotStarted') {
       props.loadComment('1','2');
     }
   //   if (props.status === 'SUCCEEDED') {
   //         setData(props.data)
   //   }

})
 

   if (props.comments.status === 'Success') {
       return (
           <>
           {
               props.comments.data && props.comments.data.length ? 
               props.comments.data.map((elemnt,key)=>{
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
   
   if (props.comments.status === 'Error') {
       return (<>
          {props.comments.error}
       </>)
   }
   return (
       <><Spinner/></>
   )
}

const mapStatesToProps = (states,props)=>{

    return {
        comments: states.app.comments
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        loadComment : (a,b) => dispatch({
            // status:'Initiated',
            type:"HIT_COMMENT",
            Payload: {a,b}
        })
    }
}


export default connect(mapStatesToProps,mapDispatchToProps)(Comment)


