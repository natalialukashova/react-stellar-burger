import React, { ReactElement, useEffect, useState } from "react";
import { useAuth } from "../../utils/auth";
import PropTypes from "prop-types";
import { api } from "../../Api/Api";
import { TElement } from "../../utils/types";

export default function ProtectedRouteElement({element}: TElement): ReactElement | null {
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await api.getUserRequest();
    setUserLoaded(true);
  }

  useEffect(() => {
    init()
  }, [])

  if (!isUserLoaded) {
    return null
  }

  return element;
}

ProtectedRouteElement.propTypes = {
    element: PropTypes.element,
}