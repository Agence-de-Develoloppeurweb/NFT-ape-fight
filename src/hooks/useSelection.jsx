import { useState, useRef } from "react";
import { generateFighters, generateItems } from "@/api";
import { useCallback } from "react";

export default function useSelection() {

  const fightersRef = useRef(generateFighters(10));
  const itemsRef = useRef(generateItems(20));
  const fighters = fightersRef.current;
  const items = itemsRef.current;

  const [selectedFighter, setSelectedFighter] = useState(0);
  const [selectedItems, setSelectedItems] = useState({
    helmet: null,
    armor: null,
    weapon: null,
    potion: null,
    pet: null
  });

  const chooseItem = (key, i) => {
    let choosen = {}
    choosen[key] = i
    setSelectedItems({...selectedItems, ...choosen})
  }

  const isActive = (i) => {
    console.log(i, 'isActive')
    switch(i){
      case 0:
        return !fighters[selectedFighter].dead
      
      case 1:
        
        return !Object.keys(selectedItems).some(k => !selectedItems[k])
      
      default:
        return true
    }
  };

  return {
    selectedFighter,
    setSelectedFighter,
    selectedItems,
    chooseItem,
    fighters,
    items,
    isActive
  };
}
