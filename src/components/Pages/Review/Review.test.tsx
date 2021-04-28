import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import ethicsData from '../../../../public/data/ethics_formated.example.json';
import marketData from '../../../../public/data/market_formated.example.json';
import Review from './index';

let originalWarn: any;
beforeEach(() => {
    originalWarn = global.console.warn;
    // mock console.warn
    global.console.warn = jest.fn();

    jest.spyOn(window, 'fetch').mockImplementation((url) => {
        // console.log('url----------', url);
        if ((url as string).includes('market_formated')) {
            return Promise.resolve({
                headers: null,
                ok: true,
                json: () => Promise.resolve(marketData)
            });
        } else if ((url as string).includes('ethics_formated')) {
            return Promise.resolve({
                headers: null,
                ok: true,
                json: () => Promise.resolve(ethicsData)
            });
        } else {
            // when the url is not /practice/market or /practice/ethics
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
        expect(getByTestId('no-reviews')).toBeInTheDocument();
        expect(global.console.warn).toHaveBeenCalledWith(`practiceType should be market or ethics`);
    });

    it('should emtpy text when there is no record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/market']}>
                <Route path='review/:practiceType'>
                    <Review />
                </Route>
            </MemoryRouter>
        );
        // debug();
        await waitFor(() => screen.getByTestId('no-reviews'));
        expect(getByTestId('no-reviews').textContent).toContain('尚未存有答錯的題目');
    });
});

describe('<Review>', () => {  
    beforeEach(() => {
        // mock two wrong questions
        window.localStorage.setItem('market-pra-history', '["false","false"]');
    });
    
    afterEach(() => {
        // clear mock data
        window.localStorage.setItem('market-pra-history', '[]');
    });

    it('market - should show content when there has record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/market']}>
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
        window.localStorage.setItem('ethics-pra-history', '["false"]');
    });
    
    afterEach(() => {
        // clear mock data
        window.localStorage.setItem('ethics-pra-history', '[]');
    });

    it('ethics - should show content when there has record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['review/ethics']}>
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