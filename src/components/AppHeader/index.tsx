import { useState, SyntheticEvent } from 'react';
import {
    Link,
    // useLocation,
    useHistory
} from "react-router-dom";

import { threeDots, bookmarkFill, trash } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';
import { clean } from '../../services';

import './AppHeader.scss';

const AppHeader = () => {
    const [showMenu, toggleMenu] = useState<boolean>(false);
    // const location = useLocation();
    const history = useHistory();

    const toToggleMenu = (e: SyntheticEvent) => {
        e.preventDefault();
        toggleMenu(!showMenu);
    };

    const goToBookmarks = (e: SyntheticEvent) => {
        toToggleMenu(e);
        history.push("/bookmarks");
    }

    const localstorageClean = (e: SyntheticEvent) => {
        e.preventDefault();
        const ans = window.confirm('您確定要清除所有作答記錄嗎?');
        if (ans) {
            clean();
        }
    }

    return (
        <header className="app-header sticky-top px-0" data-testid="app-header">
            <div className="container max-width-700">
                <div className="row no-gutters flex-nowrap justify-content-between align-items-center">
                    <div className="col-3">
                        <button className={`btn btn-sm btn-menu ${showMenu ? 'active' : ''}`} onClick={toToggleMenu}>{threeDots}</button>
                        {/* @TBD {
                            location.pathname !== '/' ?  <Link to="/" className="btn-link back-link" data-testid="back-link">{chevronLeftWhite}</Link> : null
                        } */}
                    </div>
                    <div className="col-6 text-center">
                        <Link to="/" className="header-logo">
                            F2E Exam Practice
                        </Link>
                    </div>
                    <div className="col-3 text-right">
                        <ThemeSwitch />
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
            </div>
        </header>
    );
};

export default AppHeader;