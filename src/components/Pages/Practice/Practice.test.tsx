import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import LocalStorageMock from '../../../local-storage-mock.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Practice from './index';

afterEach(cleanup);

(window as any).localStorage = LocalStorageMock;

/* 
 * another way to mock router
 
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom') as any, // use actual for all non-hook parts
        useParams: () => ({
            practiceType: 'market'
        }),
        useRouteMatch: () => ({ url: '/practice/' }),
    }));
*/

describe('<Practice>', () => {
    it('render empty content if there is not question', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/notexists']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        expect(getByTestId('loading')).toBeInTheDocument();
    });

    it('render correct total question number if user choose to practice market type', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/504');
    });

    it('render correct total question number if user choose to practice ethics type', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/ethics']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/615');
    });

    it('jump function', () => {
        const { getByTestId, getAllByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        
        expect(getAllByTestId('jump-btn').length).toBe(1);
    
        window.prompt = jest.fn();

        fireEvent.click(getByTestId('jump-btn'));
        expect(window.prompt).toHaveBeenCalledTimes(1);
        expect(window.prompt).toHaveBeenCalledWith('直接移動到第幾題?');
    });

    it('click prev and next button', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        
        const prev = getByTestId('prev-btn');
        const next = getByTestId('next-btn');

        expect(prev).toBeDisabled();
        expect(next).toBeEnabled();


        fireEvent.click(next);
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 2/504');
        expect(prev).toBeEnabled();

        fireEvent.click(prev);
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/504');
        expect(prev).toBeDisabled();
    });
});