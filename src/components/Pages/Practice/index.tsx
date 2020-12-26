import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { IformatedQuestion, pickQuestion } from '../../../helpers/data/index';
import QuestionCard from '../../QuestionCard';

const Practice = () => {
    const { practiceType } = useParams<{ practiceType: 'market' | 'ethics' }>();
    
    let defaultIndex = 0;
    if (window.localStorage.getItem(`${practiceType}-pra-history`)) {
        const histories = JSON.parse(window.localStorage.getItem(`${practiceType}-pra-history`) as string);
        const lastIndexOfTrue = histories.lastIndexOf('true');
        const lastIndexOfFalse = histories.lastIndexOf('false');
        if (lastIndexOfFalse > lastIndexOfTrue) {
            defaultIndex = lastIndexOfFalse + 1; 
        } else {
            defaultIndex = lastIndexOfTrue + 1;
        }
    }

    const [data, setData] = useState<IformatedQuestion[]>([]);
    const [currentIndex, updateCurrent] = useState<number>(defaultIndex);
    const [hasSubmit, updateHasSubmit] = useState<boolean>(false);
  
    useEffect(() => {
        // generate questions by practice type
        setData(pickQuestion(practiceType, null));
    }, [practiceType]);

    useEffect(() => {    
        if (data.length > 0) {
            if (!window.localStorage.getItem(`${practiceType}-pra-history`)) {
                window.localStorage.setItem(`${practiceType}-pra-history`, JSON.stringify(Array(data.length).fill(null))); 
            }
        }
    }, [practiceType, data]);  

    const prev = (e: SyntheticEvent) => {
        // reset hasSubmit to false
        updateHasSubmit(false);

        updateCurrent(currentIndex - 1);
    }

    const next = (e: SyntheticEvent) => {
        // reset hasSubmit to false
        updateHasSubmit(false);

        const newIndex = currentIndex + 1;
        updateCurrent(newIndex);
    }

    const updateAnsArray = (userChooseAns: string | number, questionIndex: number):void => {
        const isCorrect = Number(data[currentIndex].ans) === Number(userChooseAns);
    
        updateHasSubmit(true);

        if (window.localStorage.getItem(`${practiceType}-pra-history`)) {
            const histories = JSON.parse(window.localStorage.getItem(`${practiceType}-pra-history`) as string);
            histories[questionIndex] = String(isCorrect);
            window.localStorage.setItem(`${practiceType}-pra-history`, JSON.stringify(histories)); 
        }
    }

    const currentQuestion = data?.[currentIndex] ?? null;
  
    let renderContent = null;

    if (data.length === 0 || !currentQuestion) {
        renderContent = (<div className="text-center">Loading</div>);
    } else {
        renderContent = (
            <div className="container container-700 mt-3 mb-5">
                <nav className="navbar navbar-light" style={{backgroundColor: '#ebe9e6'}}>
                    <div>考題練習 {currentIndex + 1}/{data.length}</div>
                </nav>
                <div className="exams-wrap">
                    <QuestionCard
                        key={currentIndex}
                        seq={currentIndex}
                        data={currentQuestion}
                        haveSubmitted={hasSubmit}
                        onAnsChanged={updateAnsArray}
                    />
                </div>
                <div className="ans-btn-fixed">
                    <div className="container container-700">
                        <div className="row">
                            <div className="col-6 text-left">
                                <button className="ans-btn" onClick={(e) => prev(e)} disabled={currentIndex <= 0}>上一題 Prev</button>
                            </div>
                            <div className="col-6 text-right">
                                <button className="ans-btn" onClick={(e) => next(e)} disabled={currentIndex +1 === data.length}>下一題 Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return renderContent;
}

export default Practice;

