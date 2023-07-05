import { useCallback, useState } from "react";
import clsx from "clsx";

import Dropdown from "@/assets/img/icon/dropdown.svg";
import "./Filter.scss";

export default function Filter({ filters }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(0);

  const updateFilter = useCallback(
    (i) => {
      setFilter(i);
      setOpen((prev) => !prev);
    },
    [setOpen, setFilter]
  );

  return (
    <div className="filter__container">
      <div className="filter">
        <div className="filter__selected" onClick={() => setOpen(!open)}>
          <img src={filters[filter].icon} alt="filter icon" />

          <div className="arrow">
            <img src={Dropdown} alt="dropdown" />
          </div>
        </div>

        <div className={clsx("filter__dropdown", open && "--open")}>
          {filters.map((n, i) => {
            if (i !== filter) {
              return (
                <div
                  key={i}
                  className="filter__toSelect"
                  onClick={() => updateFilter(i)}
                >
                  <img src={n.icon} alt="filter icon" />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
