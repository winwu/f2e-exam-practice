import React, { useState, useEffect, SyntheticEvent } from 'react';
import { pickHalfHalfQuestion } from '../../../helpers/data/index';
import { getData } from '../../../services/index';
import QuestionCard from '../../QuestionCard';
import useLocalStorage from '../../../hooks/useLocalStorage';

const TOTAL = 100;

const Exam = () => {
    const [scoreHistory, setScoreHistory] = useLocalStorage('scoreHistory', []);
    const [data, setData] = useState<FormatedQuestion[]>([]);
    const [userAnswer, updateUserAnswer] = useState<any[]>([]);
    const [score, setScore] = useState<null | number>(null);

    useEffect(() => {
        const fetchData = async () => {
            const [htmlcss, javascript] : [FormatedQuestion[], FormatedQuestion[]] = [
                await getData('html_css'),
                await getData('javascript')
            ];

            const datas = {
                htmlcss,
                javascript
            };
            // generate questions
            setData(pickHalfHalfQuestion(datas, TOTAL));
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length) {
            updateUserAnswer(new Array(data.length).fill(null));
        }
    }, [data]);

    useEffect(() => {
        if (score === null) {
            return;
        }
        const newRecord = JSON.parse(JSON.stringify(scoreHistory));
        newRecord.push({
            time: new Date().getTime(),
            score
        });
        setScoreHistory(newRecord);
    }, [score]) // eslint-disable-line react-hooks/exhaustive-deps

    const updateAnsArray = (newValue: string | number, questionIndex: number):void => {
        const newAnsAry = [...userAnswer];
        newAnsAry[questionIndex] = newValue;
        updateUserAnswer(newAnsAry);
    }
  
    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (userAnswer.includes(null)) {
            alert('尚未有題目未作答');
            // const getUnAnsweredQuestions = [...userAnswer].map((d, i) => d === null ? i : null).filter(x => x);
            // console.log('未填答', getUnAnsweredQuestions); 
        }
        const thisScore = calculateScore();
        alert(`成績 ${thisScore}`);
        setScore(thisScore);
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
        <div className="container max-width-700 mt-3 mb-5" data-testid="exam-page">
            {
                data.length === 0 ?
                    <div className="text-center" data-testid="loading">Loading</div>
                    :
                    <>
                        <nav className="navbar navbar-light" data-testid="navbar">
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
                    </>
            }
            
            <div className="ans-btn-fixed">
                <div className="container max-width-700">
                    <button className="ans-btn d-inline-block w-50" onClick={(e) => submit(e)} disabled={score !== null}>{score !== null ? '已' : ''}交卷</button>
                    {
                        score !== null && (<div className="score-result">成績: {score}</div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Exam;

