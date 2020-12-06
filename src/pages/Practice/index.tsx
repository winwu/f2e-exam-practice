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
        <h2>模擬考模式</h2>
      </div>

      {
        data.map((d: any, idx: number) => (
          <div className="question-card" key={idx}>
            <div className="question-idx">{idx + 1}</div>
            <div className="question-card-content">
              <div>
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
                      // <label htmlFor={`opt-${idx}-${o.val}`}>
                      //   <button key={`${o.text}`} id={`opt-${idx}-${o.val}`} className="ans-btn">{o.val}</button>{o.text}
                      // </label>
                      <div key={`${o.text}`} className="custom-control custom-radio">
                        <input type="radio" id={`opt-${idx}-${o.val}`} name="customRadio" className="custom-control-input" />
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
    </>
  );
}

export default Practice;

