import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import AppHeader from './';


afterEach(cleanup);

describe('<AppHeader>', () => {
    it('sholud render properly', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['']}>
                <Route path=''>
                    <AppHeader />
                </Route>
            </MemoryRouter>
        );
        
        const header = getByTestId('app-header');
        expect(header.querySelector('.header-logo')).toBeInTheDocument();
        expect(header.querySelectorAll('.menu li').length).toBe(2);

        const menuBtn = header.querySelector('.btn-menu');
        const menu = header.querySelector('.menu');
        expect(menuBtn).toBeInTheDocument();

        
        if (menuBtn) {
            // toggle menu
            fireEvent.click(menuBtn);
            expect(menuBtn).toHaveClass('active');
            expect(menu).toHaveClass('active');

            fireEvent.click(menuBtn);
            expect(menuBtn).not.toHaveClass('active');
            expect(menu).not.toHaveClass('active');
        }
    });

    // it('sholud clean data after click 清除作答記錄', () => {
    //     const { getByTestId, debug } = render(
    //         <MemoryRouter initialEntries={['bookmarks']}>
    //             <Route path='bookmarks'>
    //                 <AppHeader />
    //             </Route>
    //         </MemoryRouter>
    //     );
        
    //     expect(getByTestId('back-link')).toBeInTheDocument();
        
    //     const header = getByTestId('app-header');
    //     const menuBtn = header.querySelector('.btn-menu');
    //     const resetBtn = header.querySelectorAll('.menu li')[1];

    //     if (menuBtn) {
    //         // open menu
    //         fireEvent.click(menuBtn);
    //         expect(resetBtn).toBeInTheDocument();

    //         // window.confirm = jest.fn();
    //         window.confirm = jest.fn(() => true) 

    //         fireEvent.click(resetBtn);

    //         expect(window.confirm).toBeCalled();
    //     }
    // });
});

