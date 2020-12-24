import React from 'react';
import { Link } from "react-router-dom";
import LineChart from '../../Charts/Line';
import ProgressLine from '../../Charts/ProgressLine';

const Home = () => {
    const getPercentage = (type: 'market' | 'ethics') => {
        const histories = JSON.parse(window.localStorage.getItem(`${type}-pra-history`) as string);
    
        if (!histories) {
            return 0;
        }
    
        const totalCount = histories.length;
        const finishCount = histories.filter((d: null | string) => d !== null).length;
        return Math.round((finishCount/totalCount) * 100)
    }

    const getFinisheCount = (type: 'market' | 'ethics') => {
        const histories = JSON.parse(window.localStorage.getItem(`${type}-pra-history`) as string);

        if (!histories) {
            return 0;
        }
        return histories.filter((d: any) => d !== null).length;
    }

    const marketPercentage = getPercentage('market');
    const ethicsPercentage = getPercentage('ethics');

    const getScoreHistory = () => {
        const histories = JSON.parse(window.localStorage.getItem('scoreHistory') as string);
        if (!histories || !Array.isArray(histories)) {
            return [];
        }
        return histories.slice(-5);
    }

    return (
        <div>
            <div className="container-fluid container-700 pt-2 pb-2">
                <div className="mb-3">
                    <h3 className="section-heading">考題練習</h3>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to="/practice/market" className="ans-btn full-w practice-bg">金融市場常識</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/practice/ethics" className="ans-btn full-w practice-bg">職業道德</Link>
                        </div>
                    </div>
                </div>
                <h3 className="section-heading">模擬考試</h3>
                <Link to="/exam" className="ans-btn full-w exam-bg">模擬測驗</Link>
            </div>
            
            <div className="container container-700 mt-3 mb-5">
                <section>
                    <h3 className="section-heading">作答完成率 Answer completion rate</h3>
                    <div className="progress-line-wrap">
                        <div className="progress-line-item">金融市場常識</div>
                        <ProgressLine percentage={marketPercentage} fillColor='#8c682f'/>
                        <dl className="progress-finished-dl">
                            <dt>已作答</dt>
                            <dd>{ getFinisheCount('market') }</dd>
                        </dl>
                    </div>
                    <div className="progress-line-wrap">
                        <div className="progress-line-item">職業道德</div>
                        <ProgressLine percentage={ethicsPercentage} fillColor='#8c682f'/>
                        <dl className="progress-finished-dl">
                            <dt>已作答</dt>
                            <dd>{ getFinisheCount('ethics') }</dd>
                        </dl>
                    </div>
                </section>
                <section>
                    <h3 className="section-heading">近期模擬測驗分數 Latest Score Histories</h3>
                    <div className="statistics-card">
                        <LineChart datas={getScoreHistory()}/>
                    </div>
                </section>
                <section>
                    <h3 className="section-heading">注意事項</h3>
                    <small>此網頁之題目內容皆取自<a href="https://webline.sfi.org.tw/T/ethics/download.asp" target="_blank" rel="noreferrer noopener">金融市場常識與職業道德題庫專區</a>，此網頁所取得之題庫內容之最後更新日期為 2020/12/04，如答案判斷有疑惑或錯誤，請以 webline.sfi.org.tw/T/ethics/download.asp 網站所提供之內容為主。</small>
                </section>
            </div>
        </div>
    );
}

export default Home;

