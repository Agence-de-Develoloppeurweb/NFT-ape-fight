import clsx from "clsx";
import { useCallback } from "react";

import CardBorder from "./CardBorder";

import "./Card.scss";

export default function Card({ index, itemData, isActive, isDead = null, callback = null }) {
  
  const selectCard = useCallback(() => {
    if(callback){
      isDead === null ? callback(itemData.type, index) : callback(index);
    }
  }, [index, callback, isDead, itemData]);

  return (
    <div
      className={clsx("card", isActive && "active", isDead && "dead")}
      style={{ backgroundImage: `url('src/assets/img/${itemData?.img}`, backgroundColor: itemData?.bg }}
      onClick={selectCard}
    >
      <span className="card__cursor --t --l">
        <CardBorder />
      </span>
      <span className="card__cursor --t --r">
        <CardBorder />
      </span>
      <span className="card__cursor --b --r">
        <CardBorder />
      </span>
      <span className="card__cursor --b --l">
        <CardBorder />
      </span>
    </div>
  );
}
