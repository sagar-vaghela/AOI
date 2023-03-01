import React from "react";
import Alert from "react-bootstrap/Alert";
import success from "../../success.svg";
import { useSelector } from "react-redux";

const AlertBox = ({ popupData }) => {
  return (
    <>
      {popupData &&
        popupData.popup &&
        [popupData.popup.type].map((variant) => {
          return (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex align-items-center"
            >
              {variant === "success" && (
                <img
                  src={success}
                  style={{ height: "20px", width: "20px", marginRight: "10px" }}
                  alt=""
                />
              )}{" "}
              {popupData.popup.message}
            </Alert>
          );
        })}
    </>
  );
};

export default AlertBox;
