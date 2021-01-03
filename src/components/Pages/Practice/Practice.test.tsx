import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LocalStorageMock from '../../../local-storage-mock.js';
import Practice from './index';

(window as any).localStorage = LocalStorageMock;

let container: HTMLElement | null | any = null;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any, // use actual for all non-hook parts
    useParams: () => ({
        practiceType: 'market'
    }),
    useRouteMatch: () => ({ url: '/practice/' }),
}));

beforeEach(() => {
    window.localStorage.clear();

    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('<Practice /> show loading before data loaded', () => {
    act(() => {
        render(<Practice />, container);
        expect(container.textContent).toBe('Loading');
    });
});

it('<Practice /> prev and next button', () => {
    act(() => {
        render(<Practice />, container);
    });

    expect(container.querySelector('.container .navbar').textContent).toBe('考題練習 1/504移至');

    const prev = container.querySelectorAll('.ans-btn-fixed .ans-btn')[0];
    const next = container.querySelectorAll('.ans-btn-fixed .ans-btn')[1];

    // click next
    act(() => {
        next.dispatchEvent(new MouseEvent('click', { bubbles: true })); 
    });
    expect(container.querySelector('.container .navbar').textContent).toBe('考題練習 2/504移至');

    // click prev
    act(() => {
        prev.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        
    });
    
    expect(container.querySelector('.container .navbar').textContent).toBe('考題練習 1/504移至');
    expect(prev).toBeDisabled();
});

