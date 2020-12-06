import React, { useState } from 'react';
import { bookmark, bookmarkFill } from '../../components/icons';

import { IOption, IformatedQuestion, pickHalfHalfQuestion} from '../../helpers/data/index';
const tempData = pickHalfHalfQuestion(100);

const categoryMap: {
  [categoryKey: string]: string
} = {
  market: '金融市場常識',
  ethics: '職業道德'
};

const Practice = () => {
  
  const [data] = useState<IformatedQuestion[]>(tempData);

  return (
    <>
      <div>
        <h2>practice</h2>
      </div>

      {
        data.map((d: any, idx: number) => (
          <div className="question-card" key={idx}>
            <div className="question-idx">{idx + 1}</div>
            <div className="question-card-content">
              <div>
                <span className="question-badge">{
                categoryMap[d.category]
                }:{d.qn}</span>
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
                      <button key={`${o.text}`} className="ans-btn">{o.text}</button>
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

