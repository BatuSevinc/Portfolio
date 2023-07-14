import { createContext, useState } from "react";

export const MaintenanceContext = createContext();

const Maintenance = ({children}) => {
  const [maintenance, setMaintenance] = useState(true);
  return(
    <MaintenanceContext.Provider
    value={{
        maintenance
    }}
    >
        {children}
    </MaintenanceContext.Provider>
  )
};
export default Maintenance;
