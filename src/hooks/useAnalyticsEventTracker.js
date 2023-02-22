import ReactGA from "react-ga";

function useAnalyticsEventTracker(category = "Game category") {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
}
export default useAnalyticsEventTracker;
