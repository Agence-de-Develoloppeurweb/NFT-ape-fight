import { createContext } from "react";

import useSelection from "@/hooks/useSelection";

export const SelectionContext = createContext(null);
export function SelectionProvider({ children }) {
  const { selectedFighter, setSelectedFighter, fighters, items, selectedItems, chooseItem, isActive } = useSelection();

  return (
    <SelectionContext.Provider value={{ selectedFighter, setSelectedFighter, fighters, items, selectedItems, chooseItem, isActive }}>
      {children}
    </SelectionContext.Provider>
  );
}
