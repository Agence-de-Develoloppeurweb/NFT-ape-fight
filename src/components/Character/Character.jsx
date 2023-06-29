import { useContext, useState } from 'react'
import { SelectionContext } from '@/contexts/SelectionContext'
import { stats } from '@/api'

import Stat from './Stat/Stat'
import Modal from 'react-modal'

import Fighter from "@/assets/img/selected.png"
import './Character.scss'

export default function Character() {

  const { fighters, selected } = useContext(SelectionContext)
  const [modal, setModal] = useState(false)
  
  return (
    <div 
      className="character"
      style={fighters[selected].dead ? {filter: 'grayscale(0.85)'} : {}}
    >
      <div className="character__bg"></div>

      <div className="character__container" style={{backgroundColor: fighters[selected].bg}}>
        <div className="container__fighter">
          <div className="fighter__splashart" style={{backgroundImage: `url('src/assets/img/${fighters[selected].img}`}}></div>

          <div className="fighter__detail">
            <h2 className="detail__name">{fighters[selected].name}</h2>
            <p className="detail__id">#1234</p>
          </div>
          
          <div className="fighter__sprite">
            <img src={Fighter} alt={fighters[selected].name} />
          </div>
        </div>
      </div>

      <div className="character__stats">
        <div 
          className="stats__passive"
          onClick={() => setModal(!modal)}
        >
          <h3>{fighters[selected].passive.name}</h3>
          <p>{fighters[selected].passive.description}</p>

          <Modal
            isOpen={modal}
            ariaHideApp={false}
            contentLabel="Passive name"
          >
            <>
              <h3>{fighters[selected].passive.name}</h3>
              <div className="underline"></div>
              <p>{fighters[selected].passive.description}</p>
            </>
          </Modal>
        </div>

        <div className="stats__line" style={{backgroundColor: fighters[selected].bg}}></div>

        <div className="stats__characteristics">
          {stats.map( (n, i) => {
            return (
              <Stat key={i} stat={n} value={fighters[selected].stats[n.name]} />
            );
          })}
        </div>
      </div>
    </div>
  )
}
