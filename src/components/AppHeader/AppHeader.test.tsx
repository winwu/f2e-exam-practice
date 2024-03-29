import { render, fireEvent, cleanup } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import AppHeader from './';

afterEach(cleanup);

describe('<AppHeader>', () => {
    const originalReload = window.location.reload;

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            value: { reload: jest.fn() }
        });
    });

    afterAll(() => {
        window.location.reload = originalReload;
    });
    
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

    it('sholud clean data after click 清除作答記錄 with Yes', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['bookmarks']}>
                <Route path='bookmarks'>
                    <AppHeader />
                </Route>
            </MemoryRouter>
        );
        
        // expect(getByTestId('back-link')).toBeInTheDocument();
        
        const header = getByTestId('app-header');
        const resetBtn = header.querySelectorAll('.menu li')[1].getElementsByTagName('button')[0];
        
        if (resetBtn) {
            expect(resetBtn).toBeInTheDocument();
            // will not reload if cancel window.confirm
            window.confirm = jest.fn().mockImplementation(() => false)
            
            fireEvent.click(resetBtn);
            expect(window.confirm).toBeCalled();
        }
    });

    it('sholud not clean data after click 清除作答記錄 with No', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['']}>
                <Route path=''>
                    <AppHeader />
                </Route>
            </MemoryRouter>
        );

        // expect(getByTestId('back-link')).toBeInTheDocument();

        const header = getByTestId('app-header');
        const resetBtn = header.querySelectorAll('.menu li')[1].getElementsByTagName('button')[0];

        if (resetBtn) {
            expect(resetBtn).toBeInTheDocument();
            
            // will reload if cancel window.confirm
            window.confirm = jest.fn().mockImplementation(() => true)

            fireEvent.click(resetBtn);
            expect(window.location.reload).toHaveBeenCalled();
        }
    });
});

