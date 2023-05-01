import React from "react";
import {
  AiOutlineDownload,
  AiOutlineBook,
  AiOutlineDesktop,
  AiOutlineMobile,
} from "react-icons/ai";

const Info = () => {
  return (
    <div className="info">
      <div className="info-div">
        <AiOutlineDownload />
        <span className="info-span">Instant Download</span>
      </div>
      <div className="info-div">
        <AiOutlineBook />
        <span className="info-span">Tutorials Guide</span>
      </div>
      <div className="info-div">
        <AiOutlineDesktop />
        <span className="info-span">Lightroom Desktop</span>
      </div>
      <div className="info-div">
        <AiOutlineMobile />
        <span className="info-span">Lightroom Mobile</span>
      </div>
    </div>
  );
};

export default Info;
