import React from 'react';
import {
  Link
} from "react-router-dom";

import LineChart from '../../Charts/Line';
import ProgressLine from '../../Charts/ProgressLine';

const Home = () => {
    return (
      <div>
        {/* <div className="jumbotron home-jumbotron p-3">
          <div>
              <h2 className="home-jumbotron-title">Title of a longer featured blog post</h2>
              <p className="my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
              <p className="mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div> */}
        <div className="container-fluid container-700 pt-2 pb-2">
          <div className="row align-items-center">
              <div className="col-6">
                <Link to="/practice" className="ans-btn full-w practice-bg">考題練習</Link>
              </div>
              <div className="col-6">
                <Link to="/exam" className="ans-btn full-w exam-bg">模擬測驗</Link>
              </div>
          </div>
        </div>
        
        <div className="container container-700 mt-3 mb-5">
          <section>
            <h3 className="statistics-item-title">作答完成率 Answer completion rate</h3>
            <div className="progress-line-wrap">
              <div className="progress-line-item">金融市場常識</div>
              <ProgressLine percentage={30} fillColor='#8c682f'/>
              <dl className="progress-finished-dl">
                <dt>已作答</dt>
                <dd>20</dd>
              </dl>
            </div>
            <div className="progress-line-wrap">
              <div className="progress-line-item">職業道德</div>
              <ProgressLine percentage={90} fillColor='#8c682f'/>
              <dl className="progress-finished-dl">
                <dt>已作答</dt>
                <dd>199</dd>
              </dl>
            </div>
          </section>
          <section>
            <h3 className="statistics-item-title">歷史模擬測驗分數 Score Histories</h3>
            <div className="statistics-card">
              <LineChart datas={[]}/>
            </div>
          </section>
        </div>
      </div>
    );
}

export default Home;

