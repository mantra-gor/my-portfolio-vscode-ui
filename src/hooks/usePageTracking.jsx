import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const MEASUREMENT_ID = import.meta.env.VITE_PROD_MEASUREMENT_ID;
  useEffect(() => {
    if (!window.location.href.includes("localhost") && MEASUREMENT_ID) {
      ReactGA.initialize(MEASUREMENT_ID);
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
