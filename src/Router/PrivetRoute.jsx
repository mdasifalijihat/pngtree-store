import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../authContext/AuthContext";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  // location set user -04
  const location = useLocation();
  //  console.log(location.pathname)

  // loading-02
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  // user navigate -01
  if (!user) {
    return (
      <Navigate state={location?.pathname} to={"/login"}>
        {" "}
      </Navigate>
    );
  }

  return children;
};

export default PrivetRoute;
