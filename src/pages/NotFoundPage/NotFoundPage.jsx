import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page__not_found">
      <div className="wrapper ">
        <h2 className="page__title">Page Not Found!</h2>
        {/* <Link className="home__page_btn" to="/">Home Page</Link> */}
        <button className="home__page_btn" onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PageNotFound;
