import { useContext } from 'react'
import { TabsContext } from '@/contexts/TabsContext'

import Navbar from './Navbar/Navbar'

import './Header.scss'

export default function Header() {

    const tabs = ['select fighter', 'pick some stuff', <span key={1}>start <span className="gold">fight !</span></span>];
    const { currentTab } = useContext(TabsContext);

    return (
        <div className="header">
            <div className="header__border"></div>
            <div className="header__container">
                <h1>
                    {Array.from({ length: 10 }).map( (n, i) => {
                        return (
                            <span key={i} className={i}>
                                {tabs[currentTab]} &nbsp;
                            </span>
                        );
                    })}
                </h1>
                <Navbar />
            </div>
            <div className="header__border"></div>
        </div>
    )
}
