import React, { useState, useEffect } from 'react';
import {
    Link,
    // useLocation,
    useHistory
} from "react-router-dom";

import { threeDots, bookmarkFill, trash } from '../Icons';
import { clean } from '../../services';

import './AppHeader.scss';

const AppHeader = () => {
    const [showMenu, toggleMenu] = useState<boolean>(false);
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
    // const location = useLocation();
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
    
    useEffect(() => {
        // set default theme mode by prefer-color-scheme
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // dark mode
                setDarkTheme(true);
            }
    
            // detect prefers-color-scheme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                const newColorScheme = e.matches ? 'dark' : 'light';
                setDarkTheme(newColorScheme === 'dark');
            });
        }
    }, []);

    useEffect(() => {
        document.querySelector('body')!.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
    }, [isDarkTheme])

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
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <div id="theme-swtich" className="custom-control custom-switch">
                            <i className="bi bi-moon-stars-fill"></i>
                            <label htmlFor="switch-theme">
                                <input type="checkbox" className="custom-control-input" id="switch-theme" aria-label="Toogle Theme" checked={isDarkTheme} onChange={(e) => { setDarkTheme(e.target.checked) }}/>
                                <div className="custom-control-label" role="button"></div>
                            </label>
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
            </div>
        </header>
    );
};

export default AppHeader;