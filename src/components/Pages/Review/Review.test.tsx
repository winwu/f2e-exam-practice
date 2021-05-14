import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import htmlCssData from '../../../../public/data/html_css.json';
import javascriptData from '../../../../public/data/javascript.json';
import Review from './index';

let originalWarn: any;
beforeEach(() => {
    originalWarn = global.console.warn;
    // mock console.warn
    global.console.warn = jest.fn();

    jest.spyOn(window, 'fetch').mockImplementation((url) => {
        // console.log('url----------', url);
        if ((url as string).includes('html_css.json')) {
            return Promise.resolve({
                headers: null,
                ok: true,
                json: () => Promise.resolve(htmlCssData)
            });
        } else if ((url as string).includes('javascript.json')) {
            return Promise.resolve({
                headers: null,
                ok: true,
                json: () => Promise.resolve(javascriptData)
            });
        } else {
            // when the url is not /practice/html_css or /practice/javascript
            return Promise.reject();
        }
    });
});

afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
});

describe('<Review>', () => {
    it('should warning if the url doesn\'t match', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/abc']}>
                <Route path='review/:practiceType'>
                    <Review />
                </Route>
            </MemoryRouter>
        );
        expect(getByTestId('no-data')).toBeInTheDocument();
        expect(global.console.warn).toHaveBeenCalledWith('practiceType is wrong');
    });

    it('should emtpy text when there is no record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/html_css']}>
                <Route path='review/:practiceType'>
                    <Review />
                </Route>
            </MemoryRouter>
        );
        // debug();
        await waitFor(() => screen.getByTestId('no-data'));
        expect(getByTestId('no-data').textContent).toContain('尚未存有答錯的題目');
    });
});

describe('<Review>', () => {  
    beforeEach(() => {
        // mock two wrong questions
        window.localStorage.setItem('html_css-pra-history', '["false","false"]');
    });
    
    afterEach(() => {
        // clear mock data
        window.localStorage.setItem('html_css-pra-history', '[]');
    });

    it('html / css - should show content when there has record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/html_css']}>
                <Route path='review/:practiceType'>
                    <Review />
                </Route>
            </MemoryRouter>
        );
        
        // 此時尚未有資料
        await waitFor(() => screen.getByTestId('navbar'));
        
        // 此時已有有資料
        expect(getByTestId('navbar').textContent).toContain('複習錯誤題目 1/2');

        const prev = getByTestId('prev-btn');
        const next = getByTestId('next-btn');

        expect(prev).toBeDisabled();
        expect(next).toBeEnabled();

        fireEvent.click(next);
        expect(getByTestId('pra-heading').textContent).toBe('複習錯誤題目 2/2');
        expect(next).toBeDisabled();

        fireEvent.click(prev);
        expect(getByTestId('pra-heading').textContent).toBe('複習錯誤題目 1/2');
    });
});

describe('<Review>', () => {  
    beforeEach(() => {
        // mock two wrong questions
        window.localStorage.setItem('javascript-pra-history', '["false"]');
    });
    
    afterEach(() => {
        // clear mock data
        window.localStorage.setItem('javascript-pra-history', '[]');
    });

    it('javascript - should show content when there has record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/javascript']}>
                <Route path='review/:practiceType'>
                    <Review />
                </Route>
            </MemoryRouter>
        );
        
        // 此時尚未有資料
        await waitFor(() => screen.getByTestId('navbar'));
        
        // 此時已有有資料
        expect(getByTestId('navbar').textContent).toContain('複習錯誤題目 1');

        const prev = getByTestId('prev-btn');
        const next = getByTestId('next-btn');

        expect(prev).toBeDisabled();
        expect(next).toBeDisabled();
    });
});