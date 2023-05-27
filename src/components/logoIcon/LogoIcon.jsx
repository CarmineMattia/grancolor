import React from "react";
import LogoImg from "../../assets/logoGrancolor.png";

const LogoIcon = (props) => {
  return (
    <img
      src={LogoImg}
      alt="logo"
      style={{ width: props.size, height: "auto" }}
    />
  );
};

export default LogoIcon;
