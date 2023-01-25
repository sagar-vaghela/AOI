import React from "react";
import { Nav, Accordion, Button } from "react-bootstrap";
import classNames from "classnames";
import logo from '../../new-logo.png'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export const SideBar = ({
  isOpen,
  toggle
}) => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <Button variant="link" style={{ float: 'right' }} onClick={toggle}> <FontAwesomeIcon icon={faTimes} pull="right" size="lg" /></Button>
      <div className="sidebar-header">
        <Link to="/">
          <img src={logo} alt="AOI logo" />
        </Link>
        {/* <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button> */}
      </div>

      <Nav className="flex-column pt-2">
        <ul className="sidebar_navlinks">
          <Nav.Item as="li" className={splitLocation[1] === "downstream" ? "active" : ""}>
            <Link className="nav-link" to="/downstream">Downstream</Link>
          </Nav.Item>
          <Nav.Item as="li" className={splitLocation[1] === "upstream" ? "active" : ""}>
            <Link className="nav-link" to="/upstream">Upstream</Link>
          </Nav.Item>
          <Nav.Item as="li" className={splitLocation[1] === "system" ? "active" : ""}>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>System</Accordion.Header>
                <Accordion.Body>
                  <ul className="sidebar_navlinks">
                    <Nav.Item as="li" className={splitLocation[1] === "maintenanace" ? "active" : ""}>
                      <Link className="nav-link" to="/maintenanace" >Maintenance</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className={splitLocation[1] === "softwareUpgrade" ? "active" : ""}>
                      <Link className="nav-link" to="/softwareUpgrade">Upgrade</Link>
                    </Nav.Item>
                    <Nav.Item as="li"  className={`${splitLocation[1] === "settings" ? "active" : ""} settingsTab`  }>
                      <Link className="nav-link" to="/settings">Settings</Link>
                    </Nav.Item>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Nav.Item>
          <Nav.Item as="li" className={splitLocation[1] === "help" ? "active" : ""}>
            <Link className="nav-link" to="/help" >Help</Link>
          </Nav.Item>
        </ul>
      </Nav>
    </div>)
}

export default SideBar;
