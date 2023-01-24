import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from 'react-bootstrap';

export default function HomePage() {

  return (
    <>
      <Button variant="link" ><FontAwesomeIcon icon={faArrowRight} pull="right" size="lg" /></Button>

    <div className="welcome_screen">
      <div className="welcome_head_wrapper">
        <h1>Welcome to the AOI Cable Plant Signal Generator</h1>
        <p>Click one of the tabs to get started</p>
      </div>
    </div>
    </>
  )
}
