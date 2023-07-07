import { useCallback } from "react";
import { useState } from "react";

export default function useTabs() {
  const [lastTab, setLastTab] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const updateTabs = useCallback((i) => {
    console.log(currentTab, i)
    setLastTab(currentTab);
    setCurrentTab(i);
    console.log(currentTab, 'là')
  }, [currentTab]);

  return {
    lastTab,
    currentTab,
    updateTabs,
  };
}
