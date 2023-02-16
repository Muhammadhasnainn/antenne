import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import img1 from "../images/energy1.png"
import img2 from "../images/energy2.png"
import img3 from "../images/energy3.png"

const RowSection = ({ direction, heading, img, text, list1, list2, list3 }) => {
  return (
    <div className="RowSection mt-10">
      <div className={`d-flex ${direction} canvas`}>
        <div className="w-50 me-5">
          <img src={img} className="w-100 h-100" />
        </div>
        <div className="w-50">
          <h1 className="fw-bold">{heading}</h1>
          <p className="mt-4 fs-5 text-muted">{text}</p>
          <div className="details mt-5">
            <div className="d-flex align-items-center">
              <img src={img1} style={{width: "100px"}}/>
              <div className="ms-3">
                <p className="text-muted mt-1">{list1}</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={img2} style={{width: "100px"}}/>
              <div className="ms-3">
                <p className="text-muted mt-1">{list2}</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={img3} style={{width: "100px"}}/>
              <div className="ms-3">
                <p className="text-muted mt-1">{list3}</p>
              </div>
            </div>
            <button
              className="btn primary_btn mt-5 px-4 py-2 mx-auto d-block
             text-white"
            >
              Scopri se il tuo terreno e` idoneo <HiOutlineArrowSmRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSection;
