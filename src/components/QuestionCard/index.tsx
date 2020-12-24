import React, { useState } from 'react';
import { bookmark, bookmarkFill } from '../../components/Icons';
import { IformatedQuestion, IOption } from '../../helpers/data/index';
import './QuestionCard.scss';

const categoryMap: { [categoryKey: string]: string } = {
    market: '金融市場常識',
    ethics: '職業道德'
};

const QuestionCard = (props: {
    seq: number;
    data: IformatedQuestion;
    haveSubmitted: boolean;
    onAnsChanged: Function;
}) => {

    const [selected, updateSelected] = useState<string | null>(null);

    const idx = props.seq;
    const { data, haveSubmitted, onAnsChanged } = props;
    
    const onSelect = (e: React.ChangeEvent<HTMLInputElement>):void => {
        updateSelected(e.target.value);
        // pass value to parent component
        onAnsChanged(e.target.value, idx);
    }

    let content = null;

    content = (
        <div className={`question-card ${haveSubmitted === true && Number(selected) !== Number(data.ans) ? 'has-error' : ''}`}>
            <div className="question-card-content">
                <div className="question-card-header">
                    <div className="question-idx">{idx + 1}</div>
                    <span className={`question-badge badge-${data.category}`}>{categoryMap[data.category]} {data.qn}</span>
                    <button className="question-bm-btn">
                        {
                            Number(data.category)%2 === 1 ? bookmark : bookmarkFill
                        }
                    </button>
                </div>
                
                <h3 className="question-title">{data.title}</h3>
                
                <div className="ans-btn-group">
                    { data.options ? data.options.map((o: IOption) => {
                        const isTheChosenAnswerWrong = haveSubmitted === true && Number(selected) !== Number(data.ans) && o.val === data.ans;

                        return (
                            <div key={`${o.text}`} className={`custom-control custom-radio ${isTheChosenAnswerWrong ? 'correct-ans-marked' : ''}`}>
                                <input 
                                    type="radio"
                                    id={`opt-${idx}-${o.val}`}
                                    name={`q-${idx}`}
                                    value={o.val}
                                    checked={selected === o.val.toString()} 
                                    onChange={(e) => onSelect(e)}
                                    disabled={props.haveSubmitted === true}
                                    className="custom-control-input" />
                                <label className="custom-control-label d-block" htmlFor={`opt-${idx}-${o.val}`}>({o.val}) {o.text}</label>
                            </div>
                        )}) : null
                    }
                </div>
            </div>
        </div>)
    return (
        content
    );
}

export default QuestionCard;