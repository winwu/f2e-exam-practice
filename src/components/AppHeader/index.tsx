import React, { useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

import { chevronLeftWhite, threeDots, bookmarkFill, trash } from '../Icons/index';
import './AppHeader.scss';

const AppHeader = () => {
    const [showMenu, toggleMenu] = useState<Boolean>(false);
    const location = useLocation();

    const toToggleMenu = (e: React.SyntheticEvent) => {
        e.preventDefault();
        toggleMenu(!showMenu);
    };

    return (
        <header className="app-header sticky-top">
            <div className="container container-700">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-2">
                        {
                            location.pathname !== '/' ?  <Link to="/" style={{lineHeight: '16px', verticalAlign: 'top'}}>{chevronLeftWhite}</Link> : null
                        }                        
                    </div>
                    <div className="col-8 text-center">
                        <div className="header-logo">⾦融市場常識與職業道德</div>
                    </div>
                    <div className="col-auto d-flex justify-content-end align-items-center">
                        <button className={`btn btn-sm btn-menu ${showMenu ? 'active' : ''}`} onClick={toToggleMenu}>{threeDots}</button>
                    </div>
                </div>
            </div>
            <div className={`menu ${showMenu ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/"><i className="menu-icon">{bookmarkFill}</i>書籤列表</Link>
                    </li>
                    <li>
                        <button><i className="menu-icon">{trash}</i>清除作答記錄</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;