import { createContext, useState } from "react";

export const MaintenanceContext = createContext();

const Maintenance = ({ children }) => {
  const [maintenance, setMaintenance] = useState(true);
  const [language, setLanguage] = useState(true);
  return (
    <MaintenanceContext.Provider
      value={{
        maintenance,
        language,
        setLanguage
      }}
    >
      {children}
    </MaintenanceContext.Provider>
  );
};
export default Maintenance;