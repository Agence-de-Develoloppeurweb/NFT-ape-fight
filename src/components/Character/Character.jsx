import './Character.scss'
import Fighter from "../../assets/img/selected.png";

export default function Character() {
  return (
    <div className="character">
      <div className="character__bg"></div>

      <div className="character__container">
        <div className="container__fighter">
          
          <div className="fighter__detail">
            <h2 className="detail__name">Name</h2>
            <p className="detail__id">#1234</p>
          </div>
          
          <div className="fighter__sprite">
            <img src={Fighter} alt="fighter" />
          </div>
        </div>
      </div>

      <div className='character__stats'></div>
    </div>
  )
}
