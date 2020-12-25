import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import QuestionCard from './index';

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

it('<QuestionCard /> renders and click wrong ans', () => {
    const onAnsChanged = jest.fn();
    
    act(() => {
      render(<QuestionCard
            seq={0}
            data={{
                ans: 4,
                qn: 1,
                title: '下列那一項是錯的？',
                options: [
                    {
                        val: 1,
                        text: 'ans 1'
                    },
                    {
                        val: 2,
                        text: 'ans 2'
                    },
                    {
                        val: 3,
                        text: 'ans 3'
                    },
                    {
                        val: 4,
                        text: 'ans 4'
                    }
                ],
                category: "ethics"
            }}
            haveSubmitted={false}
            onAnsChanged={onAnsChanged} />, container);
    });
    
    expect(container.querySelector('.question-badge').textContent).toBe('職業道德 1');
    expect(container.querySelector('.question-title').textContent).toBe('下列那一項是錯的？');
    expect(container.querySelector('.question-card').classList.contains('has-error')).toBe(false);
    
    const label = document.querySelectorAll('.ans-btn-group .custom-radio');
    if (label) {
        expect(label.length).toBe(4);
    }

    // click the wrong answer, and there should be an corresponding error UI changes
    const option1: HTMLInputElement | null = document.querySelector("input#opt-0-1");
    if (option1) {
        expect(option1).not.toBe(null);
        expect(option1.getAttribute('value')).toBe('1');

        act(() => {
            option1.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        
        expect(onAnsChanged).toHaveBeenCalledTimes(1);
    }

});

it('<QuestionCard /> renders and click correct ans', () => {
    const onAnsChanged = jest.fn();

    act(() => {
      render(<QuestionCard
            seq={0}
            data={{
                ans: 4,
                qn: 1,
                title: '下列那一項是錯的？',
                options: [
                    {
                        val: 1,
                        text: 'ans 1'
                    },
                    {
                        val: 2,
                        text: 'ans 2'
                    },
                    {
                        val: 3,
                        text: 'ans 3'
                    },
                    {
                        val: 4,
                        text: 'ans 4'
                    }
                ],
                category: "ethics"
            }}
            haveSubmitted={false}
            onAnsChanged={onAnsChanged} />, container);
    });
    
    expect(container.querySelector('.question-badge').textContent).toBe('職業道德 1');
    expect(container.querySelector('.question-title').textContent).toBe('下列那一項是錯的？');
    expect(container.querySelector('.question-card').classList.contains('has-error')).toBe(false);
    
    const label = document.querySelectorAll('.ans-btn-group .custom-radio');
    if (label) {
        expect(label.length).toBe(4);
    }

    // click the wrong answer, and there should be an corresponding error UI changes
    const option4: HTMLInputElement | null = document.querySelector("input#opt-0-4");
    if (option4) {
        expect(option4).not.toBe(null);
        expect(option4.getAttribute('value')).toBe('4');

        act(() => {
            option4.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onAnsChanged).toHaveBeenCalledTimes(1);
    }
});