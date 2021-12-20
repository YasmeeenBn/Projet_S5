import React, { useState, useEffect } from "react";

import "./PublicFooter.css";

const PublicFooterHomepage = () => {


  return (
    <div className="public-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2 "></div>
          <div className="col-md-4">
            <ul className="list">
              <li
                className="mb-4"
                style={{ fontSize: "20px", color: "#f9b934" }}
              >
                Countries Enabled
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicFooterHomepage;
