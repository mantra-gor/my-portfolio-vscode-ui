import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import isProdEnv from "../utils/environment";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (isProdEnv() && process.env.REACT_APP_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [initialized, location]);
};

export default usePageTracking;
