import { useContext } from "react";
import { TabsContext } from "@/contexts/TabsContext";
import { SelectionContext } from "@/contexts/SelectionContext";
import { slots, filters } from "@/api";

import Card from "./Card/Card";
import Slot from "./Slot/Slot";
import Filter from "./Filter/Filter";
import "./Selection.scss";

export default function Selection() {
  const { currentTab } = useContext(TabsContext);
  const { fighters, selected } = useContext(SelectionContext);

  return (
    <div className="selection__container">
      <div className="grid">
        <div className="grid__inset">
          {fighters.map((n, i) => {
            return (
              <Card
                key={i}
                index={i}
                itemData={n}
                isActive={i === selected}
                isDead={n.dead}
              />
            );
          })}
        </div>
      </div>

      <Filter filters={filters} />

      {currentTab > 0 && (
        <div className="slots">
          <div className="slots__container">
            {slots.map((n, i) => {
              return <Slot key={i} slot={n}></Slot>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
