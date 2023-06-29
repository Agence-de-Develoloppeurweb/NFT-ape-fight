import clsx from 'clsx'
import { useContext } from 'react'
import { SelectionContext } from '@/contexts/SelectionContext'

import CardBorder from './CardBorder'

import './Card.scss'

export default function Card({
  index,
  itemData,
  isActive,
  isDead
}) {

  const { setSelected } = useContext(SelectionContext)

  const selectCard = () => {
    //if(!isDead){
      setSelected(index)
    //}
  }

  return (
    <div 
      className={clsx('card', isActive && 'active', isDead && 'dead')}
      style={{backgroundImage: `url('src/assets/img/${itemData.img}`}}
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
  )
}
