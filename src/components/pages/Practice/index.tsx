import React, { useState, SyntheticEvent } from 'react';
import { bookmark, bookmarkFill } from '../../Icons';
import { IOption, IformatedQuestion, pickHalfHalfQuestion} from '../../../helpers/data/index';

const TOTAL = 50;
const tempData = pickHalfHalfQuestion(TOTAL);

const categoryMap: {
  [categoryKey: string]: string
} = {
  market: '金融市場常識',
  ethics: '職業道德'
};

const Practice = () => {
  
  const [data] = useState<IformatedQuestion[]>(tempData);
  const [userAnswer, updateUserAnswer] = useState(new Array(data.length).fill(null));
  const [score, setScore] = useState<null | number>(null);

  const onAnsChanged = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number):void => {
    console.log(e.target.value);
    const newAns = [...userAnswer];
    newAns[questionIndex] = e.target.value;
    updateUserAnswer(newAns);
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
        <div>模擬測驗</div>
      </nav>
      <div className="exams-wrap">
        {
          data.map((d: any, idx: number) => (
            <div className={`question-card ${score !== null && Number(userAnswer[idx]) !== Number(d.ans) ? 'has-error' : ''}`} key={idx}>
              <div className="question-card-content">
                <div className="question-card-header">
                  <div className="question-idx">{idx + 1}</div>
                  <span className={`question-badge badge-${d.category}`}>{categoryMap[d.category]} {d.qn}</span>
                </div>
                <button className="question-bm-btn">
                  {
                    Number(d.category)%2 === 1 ? bookmark : bookmarkFill
                  }
                </button>
                <h3 className="question-title">{d.title}</h3>
                <div className="ans-btn-group">
                  {
                    d.options.map((o: IOption) => {
                      return (
                        <div key={`${o.text}`} className={`custom-control custom-radio ${score !== null && Number(userAnswer[idx]) !== Number(d.ans) && o.val === d.ans ? 'correct-ans-marked' : ''}`}>
                          <input 
                            type="radio"
                            id={`opt-${idx}-${o.val}`}
                            name={`q-${idx}`}
                            value={o.val}
                            checked={userAnswer[idx] === o.val.toString()} 
                            onChange={(e) => onAnsChanged(e, idx)}
                            disabled={score !== null}
                            className="custom-control-input" />
                          <label className="custom-control-label d-block" htmlFor={`opt-${idx}-${o.val}`}>({o.val}) {o.text}</label>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="ans-btn-fixed">
        <div className="container container-700">
        <button className="ans-btn" onClick={(e) => submit(e)} disabled={score !== null}>{score !== null ? '已' : ''}交卷</button>
          {
            score !== null && (<div className="score-result">成績: {score}</div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Practice;

