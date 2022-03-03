import React from "react";
import "./SideMenu.scss";
import userImage from "../../Images/user-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faDesktop, faHouseUser, faLaptop, faTicketAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const SideMenu = (props) => {
  return (
    <aside className={`sideMenu ${props.isOpen ? 'sideMenu_open' : ''}`}>
      <div className="profile-pic">
        <a href="#" className="gc-pic">
          <img src={userImage} alt="" />
        </a>
        <h2>
          {" "}
          Vishnu Datt<span class="gc-desig"> Associate Designer </span>
        </h2>
      </div>
      <nav className="gs_menu">
        <ul>
          <li>
            <a href="" title="">
              <span className="icon">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faClipboardCheck} />
              </span>
              <span className="text">Attendance</span>              
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faHouseUser} />
              </span>
              <span className="text">Leave</span>               
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faTicketAlt} />
              </span>
              <span className="text">Ticket</span>               
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <span className="text">Assgined Assets</span>              
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              <span className="text">Team</span>
            </a>
          </li>
          <li>
            <a href="" title="">
            <span className="icon">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              <span className="text">Exit</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;
