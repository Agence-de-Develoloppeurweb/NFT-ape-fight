import { useState } from "react"

export default function useTabs() {

    const [lastTab, setLastTab] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);

    const updateTabs = (i) => {
        setLastTab(currentTab)
        setCurrentTab(i)
    }

    return {
        lastTab,
        currentTab,
        updateTabs
    }
}