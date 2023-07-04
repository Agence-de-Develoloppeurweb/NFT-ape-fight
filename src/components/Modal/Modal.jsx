import clsx from 'clsx'

import './Modal.scss'

export default function Modal({isOpen, setIsOpen, shouldCloseOnOverlayClick = false, classes, children}) {

  return (
    <div className={clsx("modal", isOpen && "--open", `${classes}`)}>
        <div 
            className="modal__overlay" 
            onClick={() => shouldCloseOnOverlayClick ? setIsOpen(!isOpen) : () => {}}
        >
            <div className="modal__content">
                {children}
            </div>
        </div>
    </div>
  )
}
