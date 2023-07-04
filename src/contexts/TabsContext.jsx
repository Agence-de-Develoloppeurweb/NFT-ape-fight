import { createContext } from "react";
import useTabs from "@/hooks/useTabs";

export const TabsContext = createContext(null);

export function TabsProvider({ children }) {
  const { lastTab, setLastTab, currentTab, setCurrentTab, updateTabs } =
    useTabs();

  return (
    <TabsContext.Provider
      value={{ lastTab, setLastTab, currentTab, setCurrentTab, updateTabs }}
    >
      {children}
    </TabsContext.Provider>
  );
}
