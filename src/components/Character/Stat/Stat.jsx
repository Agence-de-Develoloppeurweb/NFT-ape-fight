import './Stat.scss'

export default function Stat({ stat, value }) {

  return (
    <div className="stat">
        <img src={stat.icon} className="stat__icon" alt="icon" />
        <div className="stat__numbers">
          <span className="stat__value" style={{color: stat.color}}>{value}</span>
        <span className="stat__brackets">(0)</span>
        </div>
        <span className="stat__name">{stat.name}</span>
    </div>
  )
}
