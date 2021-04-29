import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import htmlCssData from '../../../../public/data/html_css.json';
import javascriptData from '../../../../public/data/javascript.json';
import Bookmarks from './index';

beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation((url) => {
        console.log('url----------', url);
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
        window.localStorage.setItem('bookmarks', '{"html_css":[1,2,3],"javascript":[]}');
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