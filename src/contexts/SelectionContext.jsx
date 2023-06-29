import { createContext } from "react"

import useSelection from "@/hooks/useSelection"

export const SelectionContext = createContext(null);
export function SelectionProvider({ children }) {

    const { selected, setSelected, fighters } = useSelection()

    return (
        <SelectionContext.Provider value={{ selected, setSelected, fighters }}>
            {children}
        </SelectionContext.Provider>
    )
}
