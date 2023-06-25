import './Card.scss'

export default function Card() {
  return (
    <div className="card">
        <span className="card__cursor --t --l"></span>
        <span className="card__cursor --b --l"></span>
        <span className="card__cursor --t --r"></span>
        <span className="card__cursor --b --r"></span>
    </div>
  )
}
