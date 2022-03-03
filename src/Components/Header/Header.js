import React from "react";
import "./Header.scss";
import userImage from "../../Images/user-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {

  const handleOpenMenu = () => {
    props.cb();
  }

  return (
    <header>
      <a onClick={handleOpenMenu} className="humburge-icon" href="#" title="girnar careline">
        <FontAwesomeIcon icon={faBars}/>
      </a>
      <a className="gc-logo" href="#" title="girnar careline">
        <span className="navnone">Employee</span> Careline
      </a>
      <p className="gc-ib">
        {" "}
        Have any question?{" "}
        <a target="_blank" href="/employee/help">
          {" "}
          Visit the employee careline Help Center{" "}
        </a>
      </p>
      <div class="profile">
        <a href="/employee/profile/details">
          <img className="gc-pr-pic" src={userImage} alt="Vishnu Datt" />
        </a>
      </div>
    </header>
  );
}

export default Header;
