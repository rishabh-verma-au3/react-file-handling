
import React,{ useEffect} from "react";
import {connect} from "react-redux"
import Spinner from "../Spinner/index.js"

const Photos = (props) => {

 //  const [data,setData] = useState([]);
     
 useEffect(()=>{
     document.title = "COMMENTS - POSTS"
     if (props.photos.status === 'NotStarted') {
       props.loadPhoto('1','2');
     }
   //   if (props.status === 'SUCCEEDED') {
   //         setData(props.data)
   //   }

})
 

   if (props.photos.status === 'Success') {
       return (
           <div style={{"display":"flex","flexDirection":"row","justifyContent":"flex-start","maxWidth":"100vw","border":"2px solid red", "height":"100vh"}}>
           {
               props.photos.data && props.photos.data.length ? 
               props.photos.data.map((elemnt,key)=>{
                  return elemnt.id <=4 ? <div key={key} style={{"padding":"2em 2em","alignSelf":"flex-start","height":"150px","width":"auto"}}>
                      <img src={elemnt.thumbnailUrl} alt=""/>
                      </div> :null
               })
               :
               <></>
           }
           </div>
       )
   }
   
   if (props.photos.status === 'Error') {
       return (<>
          {props.photos.error}
       </>)
   }
   return (
       <><Spinner/></>
   )
}

const mapStatesToProps = (states,props)=>{
    return {
        photos: states.app.photos
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        loadPhoto : (a,b) => dispatch({
            // status:'Initiated',
            type:"HIT_PHOTO",
            Payload: {a,b}
        })
    }
}


export default connect(mapStatesToProps,mapDispatchToProps)(Photos)


