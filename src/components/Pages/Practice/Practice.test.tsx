import React from 'react';
import LocalStorageMock from '../../../local-storage-mock.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Practice from './index';

afterEach(cleanup);

(window as any).localStorage = LocalStorageMock;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any, // use actual for all non-hook parts
    useParams: () => ({
        practiceType: 'market'
    }),
    useRouteMatch: () => ({ url: '/practice/' }),
}));


describe('<Practice>', () => {
    it('render heading and bottom buttons', () => {
        const { getByTestId } = render(<Practice />); 
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/504');
        expect(getByTestId('prev-btn')).toBeDisabled();
        expect(getByTestId('next-btn')).toBeEnabled();
    });

    it('jump function', () => {
        const { getByTestId, getAllByTestId } = render(<Practice />); 
        
        expect(getAllByTestId('jump-btn').length).toBe(1);
    
        window.prompt = jest.fn();

        fireEvent.click(getByTestId('jump-btn'));
        expect(window.prompt).toHaveBeenCalledTimes(1);
        expect(window.prompt).toHaveBeenCalledWith('直接移動到第幾題?');
    });

    it('click prev and next button', () => {
        const { getByTestId } = render(<Practice />); 
        
        const prev = getByTestId('prev-btn');
        const next = getByTestId('next-btn');

        fireEvent.click(next);
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 2/504');
        expect(prev).toBeEnabled();

        fireEvent.click(prev);
        expect(getByTestId('pra-heading').textContent).toBe('考題練習 1/504');
        expect(prev).toBeDisabled();
    });
});