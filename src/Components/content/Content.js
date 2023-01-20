import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Routes from "../../Routes/Routes";
import { useLocation } from 'react-router-dom';
import NavBar from "./Navbar";


const Content = (props) => {
  const loaction = useLocation()
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
    >
      {loaction.pathname !== '/' && (
        <>
          <h3 className="main_title bg-light border-bottom border-dark fw-bold mb-0">CPSG 5102 Cable Plant Generator</h3>
        </>
      )}
      {/* <NavBar/> */}
      <Routes />
    </Container>
  )
}

export default Content
