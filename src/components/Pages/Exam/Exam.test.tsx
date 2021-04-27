import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import ethicsData from '../../../../public/data/ethics_formated.example.json';
import marketData from '../../../../public/data/market_formated.example.json';
import Exam from './index';

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

describe('<Exam>', () => {
    it('should render 100 question', async () => {
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
        expect(getAllByTestId('que-card').length).toBe(100);
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