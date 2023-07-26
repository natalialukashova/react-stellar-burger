import React, { useEffect, useState } from "react";
import { useAuth } from "../../utils/auth";
import PropTypes from "prop-types";

export default function ProtectedRouteElement({element}) {
  let { verificationUser, ...auth } = useAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await verificationUser();
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