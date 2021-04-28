import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import ethicsData from '../../../../public/data/ethics_formated.example.json';
import marketData from '../../../../public/data/market_formated.example.json';
import Bookmarks from './index';

beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation((url) => {
        console.log('url----------', url);
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

describe('<Bookmarks>', () => {
    it('should emtpy text when there is no record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['bookmarks']}>
                <Route path='bookmarks'>
                    <Bookmarks />
                </Route>
            </MemoryRouter>
        );
        
        await waitFor(() => screen.getByTestId('no-bookmarks'));
        expect(getByTestId('no-bookmarks').textContent).toContain('尚未存有書籤的題目');
    });
});

describe('<Bookmarks>', () => {  
    beforeEach(() => {
        // add mock data for bookmark
        window.localStorage.setItem('bookmarks', '{"market":[1,3,295],"ethics":[]}');
    });
    
    afterEach(() => {
        // clear mock data
        window.localStorage.setItem('bookmarks', '');
    });

    it('should show content when there has record in localStorage', async() => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['bookmarks']}>
                <Route path='bookmarks'>
                    <Bookmarks />
                </Route>
            </MemoryRouter>
        );
        
        // 此時尚未有資料
        await waitFor(() => screen.getByTestId('navbar'));
        
        // 此時已有有資料
        expect(getByTestId('navbar').textContent).toContain('我的書籤 1/3');

        const prev = getByTestId('prev-btn');
        const next = getByTestId('next-btn');

        expect(prev).toBeDisabled();
        expect(next).toBeEnabled();

        fireEvent.click(next);
        expect(getByTestId('pra-heading').textContent).toBe('我的書籤 2/3');
        

        fireEvent.click(next);
        expect(getByTestId('pra-heading').textContent).toBe('我的書籤 3/3');
        expect(next).toBeDisabled();

        fireEvent.click(prev);
        fireEvent.click(prev);
        expect(getByTestId('pra-heading').textContent).toBe('我的書籤 1/3');
        expect(prev).toBeDisabled();
    });
});