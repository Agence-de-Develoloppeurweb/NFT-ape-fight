import { useContext, useState } from "react";
import { SelectionContext } from "@/contexts/SelectionContext";
import { stats } from "@/api";
import clsx from "clsx";

import Stat from "./Stat/Stat";
import Modal from "@/components/Modal/Modal";

import Fighter from "@/assets/img/selected.png";
import "./Character.scss";

export default function Character() {
  const { fighters, selectedFighter } = useContext(SelectionContext);
  const [modal, setModal] = useState(false);

  return (
    <div className={clsx("character", fighters[selectedFighter].dead && "--dead")}>
      <div className="character__bg"></div>

      <div
        className="character__container"
        style={{ backgroundColor: fighters[selectedFighter].bg }}
      >
        <div className="container__fighter">
          <div
            className="fighter__splashart"
            style={{
              backgroundImage: `url('src/assets/img/${fighters[selectedFighter].img}`,
            }}
          ></div>

          <div className="fighter__detail">
            <h2 className="detail__name">{fighters[selectedFighter].name}</h2>
            <p className="detail__id">#1234</p>
          </div>

          <div className="fighter__sprite">
            <img src={Fighter} alt={fighters[selectedFighter].name} />
          </div>
        </div>
      </div>

      <div className="character__stats">
        <div className="stats__passive" onClick={() => setModal(!modal)}>
          <h3>{fighters[selectedFighter].passive.name}</h3>
          <p>{fighters[selectedFighter].passive.description}</p>
        </div>

        <div
          className="stats__line"
          style={{ backgroundColor: fighters[selectedFighter].bg }}
        ></div>

        <div className="stats__characteristics">
          {stats.map((n, i) => {
            return (
              <Stat key={i} stat={n} value={fighters[selectedFighter].stats[n.name]} />
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={modal}
        setIsOpen={(i) => setModal(i)}
        shouldCloseOnOverlayClick={true}
        classes="passive"
      >
        <>
          <h3>{fighters[selectedFighter].passive.name}</h3>
          <div className="underline"></div>
          <p>{fighters[selectedFighter].passive.description}</p>
        </>
      </Modal>
    </div>
  );
}
