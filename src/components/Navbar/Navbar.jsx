import SelectSVG from '../../assets/img/select.svg'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <button className="navbar__btn active">
                <img src={SelectSVG} alt="select character" />
            </button>
            <button className="navbar__btn">
                button
            </button>
            <button className="navbar__btn">
                button
            </button>
        </div>
    </div>
  )
}
