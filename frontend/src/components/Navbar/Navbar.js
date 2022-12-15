import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div class="ui secondary  menu">
        <Link to="/" class="item active">
          Home
        </Link>
        <Link to="/Messages" class="item">
          Messages
        </Link>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a href="/" class="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
