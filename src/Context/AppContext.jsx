import { createContext, useContext, useState } from "react";

const AppsContext = createContext();

export function AppsProvider({ children }) {
  const [allAppsDetails, setAllAppsDetails] = useState([]);
  const [installedApps, setInstalledApps] = useState([]);

  const setInitialData = (data) => {
    setAllAppsDetails(data);
  };

  const setAllInstalledApps = (data) => {
    setInstalledApps([...installedApps, data]);
  };
  const setUninstallApp = (data) => {
    const apps = installedApps.filter((item) => item.id !== data.id);
    setInstalledApps(apps);
  };

  return (
    <AppsContext.Provider
      value={{
        allAppsDetails,
        setInitialData,
        installedApps,
        setAllInstalledApps,
        setUninstallApp,
      }}
    >
      {children}
    </AppsContext.Provider>
  );
}

export function useApps() {
  return useContext(AppsContext);
}
