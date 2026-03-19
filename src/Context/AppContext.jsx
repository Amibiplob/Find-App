import { createContext, useContext, useState } from "react";

const AppsContext = createContext();

export function AppsProvider({ children }) {
  const [allAppsDetails, setAllAppsDetails] = useState([]);
  const setInitialData = (data) => {
    setAllAppsDetails(data);
  };
  return (
    <AppsContext.Provider value={{ allAppsDetails, setInitialData }}>
      {children}
    </AppsContext.Provider>
  );
}

export function useApps() {
  return useContext(AppsContext);
}
