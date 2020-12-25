import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './index';

let container: HTMLElement | null | any = null;

beforeEach(() => {
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

it('<Home /> render', () => {
    act(() => {
        render(<Router><Home /></Router>, container);
        expect(container).not.toBe(null);
        expect(container.querySelectorAll('#practice-sec .ans-btn')[0].href).toBe('http://localhost/practice/market');
        expect(container.querySelectorAll('#practice-sec .ans-btn')[1].href).toBe('http://localhost/practice/ethics');
    });
});

