import React from "react";
import { Nav, Accordion } from "react-bootstrap";
import classNames from "classnames";
import logo from '../../AOI_logo.png'
import { Link } from "react-router-dom";

export const SideBar = ({
  isOpen,
  toggle
}) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Link to="/">
          <img src={logo} alt="AOI logo" />
        </Link>
      </div>

      <Nav className="flex-column pt-2">
        <ul className="sidebar_navlinks">
          <Nav.Item as="li" >
            <Link className="nav-link" to="/downstream">Downstream</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link className="nav-link" to="/upstream">Upstream</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>System</Accordion.Header>
                <Accordion.Body>
                  <ul className="sidebar_navlinks">
                    <Nav.Item as="li">
                      <Link className="nav-link" to="/system/maintenanace">Maintenance</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link className="nav-link" to="/system/softwareUpgrade">Upgrade</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link className="nav-link" to="/system/settings">Settings</Link>
                    </Nav.Item>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Nav.Item>
          <Nav.Item as="li">
            <Link className="nav-link" to="/help">Help</Link>
          </Nav.Item>
        </ul>
      </Nav>
    </div>)
}

export default SideBar;
