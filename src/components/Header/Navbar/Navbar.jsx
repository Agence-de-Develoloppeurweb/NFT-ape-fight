import { useContext } from 'react'
import { TabsContext } from '@/contexts/TabsContext'
import { SelectionContext } from '@/contexts/SelectionContext'
import { btns } from '@/api'
import clsx from 'clsx'

import GoBack from '@/assets/img/icon/back.svg'
import './Navbar.scss'

export default function Navbar() {

  const { currentTab, nextStep, backStep } = useContext(TabsContext);
  const { isActive } = useContext(SelectionContext);

  return (
    <>
      { currentTab > 0 &&
        <button 
          className="navbar__btn --back"
          onClick={() => backStep(currentTab - 1)}
        >
          <img src={GoBack} alt="go back" />
        </button>
      }

      <div className="navbar">
          <div className="navbar__container">

            {btns.map( (n, i) => {
              return (
                <button 
                  key={i}
                  className={clsx(
                    "navbar__btn", 
                    i === currentTab && "current",
                    currentTab >= i && isActive(i) && "active"
                  )}
                  disabled={i > currentTab}
                  onClick={() => i >= currentTab ? nextStep() : backStep(i)}
                >
                  <img src={n.icon} alt={n.alt} />
                </button>
              );
            })}
    
          </div>
      </div>
    </>
  )
}
