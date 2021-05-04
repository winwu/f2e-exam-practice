import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import htmlCssData from '../../../../public/data/html_css.json';
import javascriptData from '../../../../public/data/javascript.json';
import Practice from './index';

const totalHtmlCSS = 4;
const totalJs = 3;


/* 
 * another way to mock router
 
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom') as any, // use actual for all non-hook parts
        useParams: () => ({
            practiceType: 'html_css'
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
        expect(global.console.warn).toHaveBeenCalledWith('practiceType is wrong');
    });

    it('render correct total question number if user choose to practice html/css type', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/html_css']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        ); 
        
        expect(getByTestId('loading')).toBeInTheDocument();
        await waitFor(() => screen.getByTestId('pra-heading'))
        expect(screen.getByText(`考題練習 1/${totalHtmlCSS}`)).toBeInTheDocument();
    });

    it('render correct total question number if user choose to practice javascript type', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/javascript']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        );
        
        await waitFor(() => screen.getByTestId('pra-heading'))
        expect(getByTestId('pra-heading').textContent).toBe(`考題練習 1/${totalJs}`);
    });

    it('jump function', async () => {
        const { getByTestId, getAllByTestId } = render(
            <MemoryRouter initialEntries={['practice/html_css']}>
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

    it('click prev and next button html_css', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/html_css']}>
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
        expect(getByTestId('pra-heading').textContent).toBe(`考題練習 2/${totalHtmlCSS}`);
        expect(prev).toBeEnabled();

        fireEvent.click(prev);
        expect(getByTestId('pra-heading').textContent).toBe(`考題練習 1/${totalHtmlCSS}`);
        expect(prev).toBeDisabled();
    });

    it('should show message after go through all of questions', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['practice/html_css']}>
                <Route path='practice/:practiceType'>
                    <Practice />
                </Route>
            </MemoryRouter>
        );

        await waitFor(() => screen.getByTestId('pra-heading'));
    
        const next = getByTestId('next-btn');
        for (let i = 0; i < totalHtmlCSS; i++) {
            // click until to the last question
            fireEvent.click(next);
        }
        
        expect(getByTestId('empty-content')).toBeInTheDocument();
        fireEvent.click(getByTestId('reset-currentindex'));
        expect(getByTestId('pra-heading').textContent).toBe(`考題練習 1/${totalHtmlCSS}`);
    });
});