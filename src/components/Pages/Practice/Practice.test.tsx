import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import ethicsData from '../../../../public/data/ethics_formated.example.json';
import marketData from '../../../../public/data/market_formated.example.json';
import Practice from './index';

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

let originalWarn: any;
beforeAll(() => {
    originalWarn = global.console.warn;
    // mock console.warn
    global.console.warn = jest.fn();
});

afterAll(() => {
    // revert original warn
    global.console.warn = originalWarn;
});

beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation((url) => {
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
        expect(global.console.warn).toHaveBeenCalledWith(`practiceType should be market or ethics`);
    });

    it('render correct total question number if user choose to practice market type', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        
        expect(getByTestId('loading')).toBeInTheDocument();
        await waitFor(() => screen.getByTestId('pra-heading'))
        expect(screen.getByText("考題練習 1/504")).toBeInTheDocument();
    });

    it('render correct total question number if user choose to practice ethics type', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/ethics']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        );
        
        await waitFor(() => screen.getByTestId('pra-heading'))
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/615');
    });

    it('jump function', async () => {
        const { getByTestId, getAllByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        
        await waitFor(() => screen.getByTestId('pra-heading'))

        expect(getAllByTestId('jump-btn').length).toBe(1);
    
        window.prompt = jest.fn();

        fireEvent.click(getByTestId('jump-btn'));
        expect(window.prompt).toHaveBeenCalledTimes(1);
        expect(window.prompt).toHaveBeenCalledWith('直接移動到第幾題?');
    });

    it('click prev and next button', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        );

        await waitFor(() => screen.getByTestId('pra-heading'));
        
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

    it('should show message after go through all of questions', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/market']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        );

        await waitFor(() => screen.getByTestId('pra-heading'));
    
        const next = getByTestId('next-btn');
        for (let i = 0; i < 504; i++) {
            // click until to the last question
            fireEvent.click(next);
        }
        
        expect(getByTestId('empty-content')).toBeInTheDocument();
        fireEvent.click(getByTestId('reset-currentindex'));
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/504');
    });
});