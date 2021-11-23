import React from "react";
import HeaderComponent from "./component/Navbar/index.js"
import {Routes, Route} from "react-router-dom"
import Landing from "./component/Pages/Landing_Page/index.js"
import {NoFound} from "./component/Pages/NoFound.js"
import Post from "./component/Pages/Post.js"
import Comment from "./component/Pages/Comment"
import Photos from "./component/Pages/Photos.js";
 function App() {
  return (
    <div className="app-top">
             <HeaderComponent/>
            {/* <Router> */}
             <Routes>
                 <Route path="post" element={<Post/>}/>
                 <Route path="comment" element={<Comment/>}/>
                 <Route path="album" element={<Comment/>}/>
                 <Route path="photo" element={<Photos/>}/>
                 <Route path="todo" element={<Landing/>}/>
                 <Route path="user" element={<Landing/>}/>
                 <Route path="*" element={<NoFound/>}/>
             </Routes>
             {/* </Router> */}

    </div>
  );
}

export default App;
