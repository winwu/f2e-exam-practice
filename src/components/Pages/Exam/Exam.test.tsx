import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import htmlCssData from '../../../../public/data/html_css.json';
import javascriptData from '../../../../public/data/javascript.json';
import Exam from './index';

/* 
 * another way to mock router
 
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom') as any, // use actual for all non-hook parts
        useParams: () => ({
            practiceType: 'javascript'
        }),
        useRouteMatch: () => ({ url: '/practice/' }),
    }));
*/

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

describe('<Exam>', () => {
    it('should render 6 question', async () => {
        const { getByTestId, getAllByTestId } = render(
            <MemoryRouter initialEntries={['exam']}>
                <Route path='exam'>
                    <Exam />
                </Route>
            </MemoryRouter>
        );

        const loading = await waitFor(() => getByTestId('loading'));
        expect(loading).toHaveTextContent('Loading');

        await waitFor(() => screen.getByTestId('navbar'));
        expect(getByTestId('navbar').textContent).toContain('模擬考');
        expect(getAllByTestId('que-card').length).toBe(6);
        const submitButton = getByTestId('exam-page').querySelector('.ans-btn-fixed .ans-btn');
        expect(submitButton).toBeInTheDocument();
        expect(getByTestId('exam-page').querySelector('.ans-btn-fixed .ans-btn')?.textContent).toBe('交卷');
    });

    it('should calculate the score after pressing the submit button and without answering any question', async () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['exam']}>
                <Route path='exam'>
                    <Exam />
                </Route>
            </MemoryRouter>
        );
        await waitFor(() => screen.getByTestId('navbar'));

        window.alert = jest.fn();
        const submitButton = getByTestId('exam-page').querySelector('.ans-btn-fixed .ans-btn');
        
        if (submitButton) {
            fireEvent.click(submitButton);
            expect(window.alert).toHaveBeenCalledTimes(2);
            expect(window.alert).toHaveBeenCalledWith('尚未有題目未作答');
            expect(window.alert).toHaveBeenCalledWith('成績 0');
            expect(submitButton.textContent).toBe('已交卷');
        }
    });
});