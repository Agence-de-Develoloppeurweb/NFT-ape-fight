import { useContext } from "react";
import { TabsContext } from "@/contexts/TabsContext";
import { SelectionContext } from "@/contexts/SelectionContext";
import { btns } from "@/api";
import clsx from "clsx";

import GoBack from "@/assets/img/icon/back.svg";
import "./Navbar.scss";

export default function Navbar() {
  const { currentTab, updateTabs } = useContext(TabsContext);
  const { fighters, selected } = useContext(SelectionContext);

  return (
    <>
      {currentTab > 0 && (
        <button
          className="navbar__btn --back"
          onClick={() => updateTabs(currentTab - 1)}
        >
          <img src={GoBack} alt="go back" />
        </button>
      )}

      <div className="navbar">
        <div className="navbar__container">
          {btns.map((n, i) => {
            return (
              <button
                key={i}
                className={clsx(
                  "navbar__btn",
                  i === currentTab && "current",
                  !fighters[selected].dead && "active"
                )}
                onClick={() => updateTabs(currentTab + 1)}
              >
                <img src={n.icon} alt={n.alt} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
