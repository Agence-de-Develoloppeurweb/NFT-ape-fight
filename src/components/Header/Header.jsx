import './Header.scss'

export default function Header({ children }) {
  return (
    <div className="header">
        <div className="header__border"></div>
        <div className="header__container">
            <h1>
                {Array.from({ length: 10 }).map( (n, i) => {
                    return (
                        <span key={i} className={i}>
                            {children} &nbsp;
                        </span>
                    );
                })}
            </h1>
        </div>
        <div className="header__border"></div>
    </div>
  )
}
