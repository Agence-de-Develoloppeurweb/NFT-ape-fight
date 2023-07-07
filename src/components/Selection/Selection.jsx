import { useContext } from "react";
import { TabsContext } from "@/contexts/TabsContext";
import { SelectionContext } from "@/contexts/SelectionContext";
import { itemsType, filters } from "@/api";

import Card from "./Card/Card";
import Slot from "./Slot/Slot";
import Filter from "./Filter/Filter";
import "./Selection.scss";

export default function Selection() {

  const { currentTab } = useContext(TabsContext);
  const { fighters, selectedFighter, setSelectedFighter, items, selectedItems, chooseItem } = useContext(SelectionContext);

  return (
    <div className="selection__container">
      <div className="grid">
        <div className="grid__inset">
          {currentTab === 0 ?
            fighters.map((n, i) => {
              return (
                <Card
                  key={i}
                  index={i}
                  itemData={n}
                  isActive={i === selectedFighter}
                  isDead={n.dead}
                  callback={setSelectedFighter}
                />
            )})
            :
            items.map((n, i) => {
              return(
                <Card 
                  key={i}
                  index={i}
                  itemData={n}
                  isActive={i === selectedItems[n.type]}
                  callback={chooseItem}
                />
            )})
          }
        </div>
      </div>

      <Filter filters={filters} />

      {currentTab > 0 && (
        <div className="slots">
          <div className="slots__container">
            {itemsType.map((n, i) => {
              return (
                <Slot key={i} slot={n}>
                  {items[selectedItems[n.name]] && <Card itemData={items[selectedItems[n.name]]}/>}
                </Slot>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
}
