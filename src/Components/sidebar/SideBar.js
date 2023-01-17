import React from "react";
import { Nav, Accordion } from "react-bootstrap";
import classNames from "classnames";
import logo from '../../AOI_logo.png'

export const SideBar = ({
  isOpen,
  toggle
}) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <img src={logo} alt="AOI logo" />
      </div>

      <Nav className="flex-column pt-2">
        <ul className="sidebar_navlinks">
          <Nav.Item as="li">
            <Nav.Link href="#">Downstream</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#">Upstream</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>System</Accordion.Header>
                <Accordion.Body>
                  <ul className="sidebar_navlinks">
                    <Nav.Item as="li">
                      <Nav.Link href="#">Maintenance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Upgrade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Settings</Nav.Link>
                    </Nav.Item>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#">Help</Nav.Link>
          </Nav.Item>
        </ul>
      </Nav>
    </div>)
}

export default SideBar;
