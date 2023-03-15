import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Routes from "../../Routes/Routes";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import AlertBox from "../Alert/AlertBox";
import { useSelector } from "react-redux";

const Content = (props) => {
  const popupData = useSelector((state) => state.popupReducer);
  const rcQAMAnnexData = useSelector((state) => state.settingAnnexDataReducer.settingAnnexGet);
  const loaction = useLocation();

  const pageName =
    loaction.pathname !== "/"
      ? loaction.pathname.split("/")[1][0].toUpperCase() +
        loaction.pathname.substring(1).slice(1)
      : "";

  const pageNameWithSpace = pageName
    .replace(/(_|-)/g, " ")
    .trim()
    .replace(/\w\S*/g, function (str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    })
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");

  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
    >
      <Button variant="link" className="open_btn" onClick={props.toggle}>
        {props.isOpen ? (
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M914.368 673.664h-519.68c-25.152 0-45.568-22.016-45.568-48.896 0-26.88 20.416-48.896 45.568-48.896h519.68c25.216 0 45.632 22.016 45.632 48.896 0 26.88-20.48 48.896-45.632 48.896z m0-228.096h-519.68c-25.152 0-45.568-21.952-45.568-48.896 0-26.88 20.416-48.896 45.568-48.896h519.68c25.216 0 45.632 22.016 45.632 48.896 0 26.88-20.48 48.896-45.632 48.896z m-3.264-219.904H115.328c-26.88 0-50.56-20.352-51.328-47.168A48.896 48.896 0 0 1 112.896 128h795.776c26.88 0 50.56 20.416 51.328 47.168a48.896 48.896 0 0 1-48.896 50.56z m-619.776 447.232V348.672L64 510.784l227.328 162.112c0 0.768 0 0.768 0 0z m-178.432 122.944h795.776c26.88 0 50.56 20.48 51.328 47.232a48.896 48.896 0 0 1-48.896 50.496H115.328c-26.88 0-50.56-20.416-51.328-47.232a48.896 48.896 0 0 1 48.896-50.496z"
              fill="#000000"
            />
          </svg>
        ) : (
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M109.632 673.664h519.68c25.152 0 45.568-22.016 45.568-48.896 0-26.88-20.416-48.896-45.568-48.896h-519.68c-25.216 0-45.632 22.016-45.632 48.896 0 26.88 20.48 48.896 45.632 48.896z m0-228.096h519.68c25.152 0 45.568-21.952 45.568-48.896 0-26.88-20.416-48.896-45.568-48.896h-519.68c-25.216 0-45.632 22.016-45.632 48.896 0 26.88 20.48 48.896 45.632 48.896z m3.264-219.904h795.776c26.88 0 50.56-20.352 51.328-47.168A48.896 48.896 0 0 0 911.104 128H115.328c-26.88 0-50.56 20.416-51.328 47.168a48.896 48.896 0 0 0 48.896 50.56z m619.776 447.232V348.672L960 510.784l-227.328 162.112c0 0.768 0 0.768 0 0z m178.432 122.944H115.328c-26.88 0-50.56 20.48-51.328 47.232a48.896 48.896 0 0 0 48.896 50.496h795.776c26.88 0 50.56-20.416 51.328-47.232a48.896 48.896 0 0 0-48.896-50.496z"
              fill="#000000"
            />
          </svg>
        )}
      </Button>

      <AlertBox popupData={popupData} />

      {loaction.pathname !== "/" && (
        <>
          <h3 className="main_title bg-light border-bottom border-dark fw-bold mb-0">
            CPSG 5102 Cable Plant Generator
          </h3>
          <p className="p-2 mb-0 fw-bold fs-5 border-bottom border-dark ">
            {pageNameWithSpace} {loaction.pathname === '/downstream' ? `- ${rcQAMAnnexData && rcQAMAnnexData.data}` : ''}
          </p>
        </>
      )}
      <Routes />
    </Container>
  );
};

export default Content;
