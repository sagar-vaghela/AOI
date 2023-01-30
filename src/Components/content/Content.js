import React, { useState } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Routes from "../../Routes/Routes";
import { useLocation } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import AlertBox from "../Alert/AlertBox";


const Content = (props) => {
  const [alertMode, setAlertMode] = useState(null)

  const showAlertBox = (msg, type) => {
    setAlertMode({
      message: msg,
      type: type
    })
  }

  setTimeout(() => {
    setAlertMode(null)
  }, 2000)

  const loaction = useLocation()
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
    >
      <Button variant="link" className="open_btn" onClick={props.toggle}>
        <FontAwesomeIcon icon={faArrowRight} pull="right" size="lg" />
      </Button>

      <AlertBox alertMode={alertMode} />

      {loaction.pathname !== '/' && (
          <h3 className="main_title bg-light border-bottom border-dark fw-bold mb-0">CPSG 5102 Cable Plant Generator</h3>
      )}
      <Routes showAlertBox={showAlertBox} />
    </Container>
  )
}

export default Content
