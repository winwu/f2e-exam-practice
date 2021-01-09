import React, { useState } from 'react';
import {
    Link,
    useLocation,
    useHistory
} from "react-router-dom";

import { chevronLeftWhite, threeDots, bookmarkFill, trash } from '../Icons/index';
import { clean } from '../../services';

import './AppHeader.scss';

const AppHeader = () => {
    const [showMenu, toggleMenu] = useState<Boolean>(false);
    const location = useLocation();
    const history = useHistory();

    const toToggleMenu = (e: React.SyntheticEvent) => {
        e.preventDefault();
        toggleMenu(!showMenu);
    };

    const goToBookmarks = (e: React.SyntheticEvent) => {
        toToggleMenu(e);
        history.push("/bookmarks");
    }

    const localstorageClean = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const ans = window.confirm('您確定要清除所有作答記錄嗎?');
        if (ans) {
            clean();
        }
    }

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
                        <button onClick={goToBookmarks}><i className="menu-icon">{bookmarkFill}</i>書籤列表</button>
                    </li>
                    <li>
                        <button onClick={localstorageClean}><i className="menu-icon">{trash}</i>清除作答記錄</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;