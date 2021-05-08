import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeSwitch from './';

describe('<ThemeSwitch>', () => {
    it('should change theme when switch theme checked/unchecked', () => {
        
        const element = render(<ThemeSwitch />);
        const switchThemeCheckbox = element.getByTestId('theme-swtich-input');
        const body = document.getElementsByTagName('body')[0];

        expect(switchThemeCheckbox).toBeInTheDocument();
        
        if (switchThemeCheckbox) {
            expect(switchThemeCheckbox.checked).toEqual(false);
            expect(body.attributes['data-theme'].value).toBe('light');
            
            fireEvent.click(switchThemeCheckbox);
            expect(switchThemeCheckbox.checked).toEqual(true);
            expect(body.attributes['data-theme'].value).toBe('dark');
        }
    })

    it('should be dark theme if browser prefers-color-scheme is dark', () => {
        // via https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom

        // pretend the theme is dark in prefers-color-scheme
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: query === '(prefers-color-scheme: dark)' ? true : false,
                addEventListener: jest.fn()
            })),
        });

        render(<ThemeSwitch />);

        const body = document.getElementsByTagName('body')[0];
        expect(body.attributes['data-theme'].value).toBe('dark');
    });
});

