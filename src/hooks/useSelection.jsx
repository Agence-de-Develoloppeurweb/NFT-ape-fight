import { useState, useRef } from "react";
import { generateFighters } from "@/api";

export default function useSelection() {
  const refs = useRef(generateFighters(10));
  const fighters = refs.current;
  const [selected, setSelected] = useState(0);

  return {
    selected,
    setSelected,
    fighters,
  };
}
