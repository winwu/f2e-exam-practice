import React, { useState, SyntheticEvent } from 'react';
import { IformatedQuestion, getAllQuestion} from '../../../helpers/data/index';
import QuestionCard from '../../QuestionCard';

const tempData = getAllQuestion();
// const tempData = pickQuestion('*', 5);

const Practice = () => {
  const [data] = useState<IformatedQuestion[]>(tempData);
  const [currentIndex, updateCurrent] = useState<number>(0);
  const [hasSubmit, updateHasSubmit] = useState<boolean>(false);
  // const [userAnswer, updateUserAnswer] = useState(new Array(data.length).fill(null));

  const prev = (e: SyntheticEvent) => {
    // reset hasSubmit to false
    updateHasSubmit(false);
    updateCurrent(currentIndex - 1);
  }

  const next = (e: SyntheticEvent) => {
    updateHasSubmit(false);
    updateCurrent(currentIndex + 1);
  }

  const updateAnsArray = (newValue: string | number, questionIndex: number):void => {
    // @TODO: store answer history into LocalStorage
    // const newAnsAry = [...userAnswer];
    // newAnsAry[questionIndex] = newValue;
    // updateUserAnswer(newAnsAry);
    updateHasSubmit(true);
  }


  const currentQuestion = data[currentIndex];
  
  return (
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
              <button className="ans-btn" onClick={(e) => next(e)} disabled={currentIndex +1  == tempData.length}>下一題 Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;

