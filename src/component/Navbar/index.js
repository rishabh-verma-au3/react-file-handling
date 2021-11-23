
import React from "react";
import "./style.css"
import {Link} from "react-router-dom"


const HeaderComponent = (props) => {
  
    return (
        <div className="navbar-top">
            <div className="logo">Logo</div>
            <div className="searchbar">SearchBar</div>
            <div className="menu-list-div">
                   <ul className="menu-list-main">
                       <li className="list-item">
                          <Link className="list-item-link" to="/post">
                                POST
                          </Link>
                       </li>
                       <li className="list-item">
                          <Link className="list-item-link" to="/comment">
                              COMMENT
                          </Link>
                       </li>
                       {/* <li className="list-item">
                       <Link className="list-item-link" to="/album">
                              ALBUMS
                              </Link>
                       </li> */}
                       <li className="list-item">
                       <Link className="list-item-link" to="/photo">
                              PHOTOS
                              </Link>
                       </li>
                       <li className="list-item">
                       <Link className="list-item-link" to="/todo">
                              TODOS
                              </Link>
                       </li>
                       <li className="list-item">
                       <Link className="list-item-link" to="/user">
                              USER
                              </Link>
                       </li>
                   </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;