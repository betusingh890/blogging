import React from "react";

import {useSelector} from "react-redux";

function Navbar(){
  var isLoggedIn = useSelector(state => state.isLoggedIn);

  // console.log(isLoggedIn);


    return (
        <nav className ="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Blog It</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/top">Top Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/new">New Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/create"> ✍🏻 Blog</a>
              </li>
              {isLoggedIn === "LoggedIn" ? 
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  👱🏽‍♂️
              </a>
              <ul clasNames="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                  <li><a className="dropdown-item" href="/contacts"> My Contacts</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/logout">Log Out ⬅</a></li>
              </ul>
            </li> : <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login"> Login</a>
              </li>}
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;