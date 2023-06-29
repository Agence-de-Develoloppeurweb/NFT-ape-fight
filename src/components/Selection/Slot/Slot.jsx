import './Slot.scss'

export default function Slot({ slot, children }) {
  
  return (
    <div className="slot" style={{backgroundImage: `url(${slot.icon})`}}>
      {children}
    </div>
  )
}
