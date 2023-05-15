import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { apiAuth } from "../../services/auth";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    apiAuth.logout().then(navigate("/", { replace: true }));
  });

  return <></>;
};
