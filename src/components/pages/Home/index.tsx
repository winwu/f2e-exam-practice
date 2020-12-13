import React from 'react';
import {
  Link
} from "react-router-dom";
import LineChart from '../../Charts/Line';

const Home = () => {
    return (
      <>
        <div className="jumbotron home-jumbotron p-3">
          <div>
              <h2 className="home-jumbotron-title">Title of a longer featured blog post</h2>
              <p className="my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
              {/* <p className="mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p> */}
          </div>
        </div>
        <div>
          <h3 className="statistics-item-title">Answer completion rate</h3>
          {/* TODO */}
          <h3 className="statistics-item-title">Score Histories</h3>
          <div className="statistics-card">
            <LineChart datas={[]}/>
          </div>
          
        </div>
        <div className="row align-items-center portal-btn-group">
            <div className="col">
              <Link to="/practice" className="ans-btn full-w practice-bg">考題練習</Link>
            </div>
            <div className="col">
              <Link to="/exam" className="ans-btn full-w exam-bg">模擬測驗</Link>
            </div>
        </div>
      </>
    );
}

export default Home;

