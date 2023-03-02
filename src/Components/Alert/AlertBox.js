import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import success from "../../success.svg";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../../actions/popupAction";

const AlertBox = ({ popupData }) => {

  const [visible, setVisible] = useState(false);
  const alert = useSelector((state) => state.popupReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert && alert.popup) {
      setVisible(true);
      const timer = setTimeout(() => {
        dispatch(hidePopup());
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [alert, dispatch]);

  if (!visible) {
    return null;
  }

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