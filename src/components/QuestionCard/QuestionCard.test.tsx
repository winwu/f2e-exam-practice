import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import QuestionCard from './index';

afterEach(cleanup);

describe('<QuestionCard>', () => {
    it('after render then click wrong answer', () => {
        const onAnsChanged = jest.fn();

        const { getByTestId, getAllByTestId, rerender } = render(
            <QuestionCard
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
                onAnsChanged={onAnsChanged} />
        );
        
        

        expect(getByTestId('que-badge').textContent).toBe('職業道德 1');
        expect(getByTestId('que-title').textContent).toBe('下列那一項是錯的？');
        expect(getAllByTestId('que-input').length).toBe(4);

        // click the wrong answer, and there should be an corresponding error UI changes
        const wrongAnsInput = getAllByTestId('que-input')[0];
        fireEvent.click(wrongAnsInput);

        expect(onAnsChanged).toHaveBeenCalledTimes(1);

        rerender(<QuestionCard
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
            haveSubmitted={true}
            onAnsChanged={onAnsChanged} />)
        expect(getByTestId('que-card').classList.contains('has-error')).toBe(true);
        expect(getAllByTestId('que-input')[3].parentElement).toHaveClass('wrong-ans-marked');
    });

    it('after render then click correct answer', () => {
        const onAnsChanged = jest.fn();

        const { getByTestId, getAllByTestId, rerender } = render(
            <QuestionCard
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
                    category: "market"
                }}
                haveSubmitted={false}
                onAnsChanged={onAnsChanged} />
        );
        
        

        expect(getByTestId('que-badge').textContent).toBe('金融市場常識 1');
        expect(getByTestId('que-title').textContent).toBe('下列那一項是錯的？');
        
        expect(getAllByTestId('que-input').length).toBe(4);

        // click the correct answer, and there should be an corresponding success UI changes
        const correctAnsInput = getAllByTestId('que-input')[3];
        fireEvent.click(correctAnsInput);

        expect(onAnsChanged).toHaveBeenCalledTimes(1);

        rerender(<QuestionCard
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
                category: "market"
            }}
            haveSubmitted={true}
            onAnsChanged={onAnsChanged} />)
        
        expect(getByTestId('que-card').classList.contains('has-error')).toBe(false);
        expect(getAllByTestId('que-input')[3].parentElement).toHaveClass('correct-ans-marked');
    });

    it('bookmark', () => {
        const onAnsChanged = jest.fn();

        const { getByTestId, getAllByTestId, debug } = render(
            <QuestionCard
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
                onAnsChanged={onAnsChanged} />
        );
            
        const btn = getByTestId('que-bm-btn');
        // default is not bookmarked
        expect(getByTestId('que-bm-btn').querySelector('[class="bi bi-bookmark"]')).toBeInTheDocument();
        
        fireEvent.click(btn);
        expect(getByTestId('que-bm-btn').querySelector('[class="bi bi-bookmark-fill"]')).toBeInTheDocument();
        
        fireEvent.click(btn);
        expect(getByTestId('que-bm-btn').querySelector('[class="bi bi-bookmark"]')).toBeInTheDocument();
    });
});