import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import Exam from './index';

afterEach(cleanup);

// (window as any).localStorage = LocalStorageMock;

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

describe('<Exam>', () => {
    it('should render 100 question', () => {
        const { getByTestId, getAllByTestId } = render(
            <MemoryRouter initialEntries={['exam']}>
                <Route path='exam'>
                    <Exam />
                </Route>
            </MemoryRouter>
        );
        expect(getByTestId('navbar').textContent).toContain('模擬考');
        expect(getAllByTestId('que-card').length).toBe(100);

        const submitButton = getByTestId('exam-page').querySelector('.ans-btn-fixed .ans-btn');
        expect(submitButton).toBeInTheDocument();
        expect(getByTestId('exam-page').querySelector('.ans-btn-fixed .ans-btn')?.textContent).toBe('交卷');
    });

    it('should calculate the score after pressing the submit button and without answering any question', () => {
        const { getByTestId, getAllByTestId, debug } = render(
            <MemoryRouter initialEntries={['exam']}>
                <Route path='exam'>
                    <Exam />
                </Route>
            </MemoryRouter>
        );

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