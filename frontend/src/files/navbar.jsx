import React from "react";

import {useSelector} from "react-redux";

function Navbar(){
  var isLoggedIn = useSelector(state => state.isLoggedIn);

  // console.log(isLoggedIn);


    return (
        <nav class="navbar navbar-expand-lg bg-light py-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Blog It</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/top">Top Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/new">New Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/create"> ✍🏻 Blog</a>
              </li>
              {isLoggedIn == "LoggedIn" ? 
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  👱🏽‍♂️
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">My Profile</a></li>
                  <li><a class="dropdown-item" href="#"> My Contacts</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Log Out ⬅</a></li>
              </ul>
            </li> : <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/create"> Login</a>
              </li>}
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;