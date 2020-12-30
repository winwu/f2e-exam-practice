import React, { useState, SyntheticEvent } from 'react';
import { IformatedQuestion, pickHalfHalfQuestion} from '../../../helpers/data/index';

import QuestionCard from '../../QuestionCard';

const TOTAL = 100;
const tempData = pickHalfHalfQuestion(TOTAL);

const Exam = () => {
    const [data] = useState<IformatedQuestion[]>(tempData);
    const [userAnswer, updateUserAnswer] = useState(new Array(data.length).fill(null));
    const [score, setScore] = useState<null | number>(null);

    const updateAnsArray = (newValue: string | number, questionIndex: number):void => {
        const newAnsAry = [...userAnswer];
        newAnsAry[questionIndex] = newValue;
        updateUserAnswer(newAnsAry);
    }
  
    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (userAnswer.includes(null)) {
            alert('尚未有題目未作答');
            const getNotAnsQuestion = [...userAnswer].map((d, i) => d === null ? i : null).filter(x => x);
            console.log('未填答', getNotAnsQuestion); 
        }
        const thisScore = calculateScore();
        alert(`成績 ${thisScore}`);
        setScore(thisScore);

        let scoreHistory: any = localStorage.getItem('scoreHistory');
        if (scoreHistory) {
            scoreHistory = JSON.parse(scoreHistory);
        } else {
            scoreHistory = [];
        }
    
        scoreHistory.push({
            time: new Date().getTime(),
            score: thisScore
        });
        localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
    }

    const calculateScore = (): number => {
        const eachScoreOfQuestiin = 100/TOTAL;
        
        let correctLength = 0;
        data.forEach((d, idx) => {
            if (userAnswer[idx] &&  Number(userAnswer[idx]) === Number(d.ans)) {
                correctLength++;
            }
        });
        return correctLength*eachScoreOfQuestiin;
    }

    return (
        <div className="container container-700 mt-3 mb-5">
            <nav className="navbar navbar-light" style={{backgroundColor: '#ebe9e6'}}>
                <div>模擬考</div>
            </nav>
            <div className="exams-wrap">
                { data.map((d: any, idx: number) => (
                    <QuestionCard 
                        key={idx}
                        seq={idx}
                        data={d}
                        haveSubmitted={score !== null ? true : false}
                        onAnsChanged={updateAnsArray}
                    />
                ))}
            </div>
            <div className="ans-btn-fixed">
                <div className="container container-700">
                    <button className="ans-btn d-inline-block w-50" onClick={(e) => submit(e)} disabled={score !== null}>{score !== null ? '已' : ''}交卷</button>
                    {
                        score !== null && (<div className="score-result">成績: {score}</div>)
                    }
                </div>
            </div>
            <div className="modal fade" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exam;

