import React, { useState, useEffect } from 'react';
import './ThemeSwitch.scss';

const ThemeSwitch = () => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
    
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
    }, [isDarkTheme]);

    return (
        <div id="theme-swtich" className="custom-control custom-switch">
            <i className="bi bi-moon-stars-fill"></i>
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="theme-swtich-input" data-testid="theme-swtich-input" aria-label="Toogle Theme" checked={isDarkTheme} onChange={(e) => { setDarkTheme(e.target.checked) }}/>
                <label className="custom-control-label" htmlFor="theme-swtich-input"></label>
            </div>
        </div>
    )
}

export default ThemeSwitch;