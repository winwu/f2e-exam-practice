import React, { useState } from 'react';
import { bookmark, bookmarkFill } from '../../components/icons';
import tempData from './data.json';

interface IQuestion {
  qn: string | number;
  ans: string | number;
  title: string;
  category: string;
}

const Practice = () => {
  const [data] = useState<IQuestion[]>(tempData);

  return (
    <>
      <div>
        <h2>practice</h2>
      </div>

      {
        data.map((d: IQuestion, idx: number) => (
          <div className="question-card" key={idx}>
            <div className="question-idx">{idx + 1}</div>
            <div className="question-card-content">
              <div>
                <span className="question-badge">Cate badge{d.qn}</span>
              </div>
              <button className="question-bm-btn">
                {
                  Number(d.category)%2 === 1 ? bookmark : bookmarkFill
                }
              </button>
              <h3 className="question-title">{d.title}</h3>
              <div className="ans-btn-group">
                {
                  ['A', 'B', 'C', 'D'].map((ans) => {
                    return (
                      <button key={ans} className="ans-btn">{ans}</button>
                    )
                  })
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Practice;

