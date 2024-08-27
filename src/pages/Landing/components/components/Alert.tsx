import style from "./Alert.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

interface AlertProps {
    children: any;
    type: string;
    message: string;
  }

export const Alert: React.FC<AlertProps> = ({ children, type, message }) => {
    const [isShow, setIsShow] = useState(true);

    const renderElAlert = function () {
      return React.cloneElement(children);
    };
  
    const handleClose = (e: any) => {
      e.preventDefault();
      setIsShow(false);
    };
  
    return (
    <div className={style.alertParent}>
            <div className={css(style.alert, style[type], !isShow && style.hide)}>
                <span className={style.closebtn} onClick={handleClose}>
                &times;
                </span>
                {children ? renderElAlert() : message}
            </div>
      </div>
    );
  }
  
