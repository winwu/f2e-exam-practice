import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LineChart from '../../Charts/Line';
import ProgressLine from '../../Charts/ProgressLine';
import { getHistories, getWrongQuestions } from '../../../services';
import useLocalStorage from '../../../hooks/useLocalStorage';

const Home = () => {
    const [scoreHistory] = useLocalStorage('scoreHistory', []);
    const [wrongHtmlCss, setWrongHtmlCss] = useState<FormatedQuestion[]>([]);
    const [wrongJavascript, setWrongJavascript] = useState<FormatedQuestion[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // @FIX ME
            const wrongMarketQuestions = await getWrongQuestions('html_css');
            const wrongEthicsQuestions = await getWrongQuestions('javascript');

            setWrongHtmlCss(wrongMarketQuestions);
            setWrongJavascript(wrongEthicsQuestions);
        }
        fetchData();
    }, []);

    const getPercentage = (type: QuestionTypes) => {
        const histories = getHistories(type);
    
        if (!histories) {
            return 0;
        }
        const totalCount = histories.length;
        const finishCount = histories.filter((d: null | string) => d !== null).length;
        return Math.round((finishCount/totalCount) * 100)
    }

    const getFinisheCount = (type: QuestionTypes) => {
        const histories = getHistories(type);

        if (!histories) {
            return 0;
        }
        return histories.filter((d: any) => d !== null).length;
    }

    const marketPercentage = getPercentage('html_css');
    const ethicsPercentage = getPercentage('javascript');

    
    let reviewItems = [];
    if (wrongHtmlCss.length) {
        reviewItems.push(<div key="html_css" className="col-6">
            <Link to="/review/html_css" className="ans-btn review-bg">HTML/CSS</Link>
        </div>);
    }
    if (wrongJavascript.length) {
        reviewItems.push(<div key="javascript" className="col-6">
            <Link to="/review/javascript" className="ans-btn review-bg">JavaScript</Link>
        </div>);
    }

    return (
        <div>
            <div className="container-fluid max-width-700 pt-4 pb-4">
                <div id="practice-sec" className="mb-3">
                    <h3 className="section-heading">考題練習 Practice</h3>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to="/practice/html_css" className="ans-btn practice-bg">HTML/CSS</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/practice/javascript" className="ans-btn practice-bg">JavaScript</Link>
                        </div>
                    </div>
                </div>

                {
                    wrongHtmlCss.length || wrongJavascript.length ? (
                        <div id="review-sec" className="mb-3">
                            <h3 className="section-heading">複習錯誤題目 Review</h3>
                            <div className="row align-items-center">
                                {reviewItems}
                            </div>
                        </div>
                    ) : null
                }
                
                <h3 className="section-heading">模擬考試 Mock examination</h3>
                <Link to="/exam" className="ans-btn exam-bg">模擬測驗</Link>
            </div>

            
            <div className="container-fluid max-width-700 mt-3 mb-3">
                <section>
                    <h3 className="section-heading">作答完成率 Answer completion rate</h3>
                    <div className="progress-line-wrap">
                        <div className="progress-line-item">HTML / CSS</div>
                        <ProgressLine percentage={marketPercentage} fillColor='#8c682f'/>
                        <dl className="progress-finished-dl">
                            <dt>已作答</dt>
                            <dd>{ getFinisheCount('html_css') }</dd>
                        </dl>
                    </div>
                    <div className="progress-line-wrap">
                        <div className="progress-line-item">JavaScript</div>
                        <ProgressLine percentage={ethicsPercentage} fillColor='#8c682f'/>
                        <dl className="progress-finished-dl">
                            <dt>已作答</dt>
                            <dd>{ getFinisheCount('javascript') }</dd>
                        </dl>
                    </div>
                </section>
                <section>
                    <h3 className="section-heading">近期模擬測驗分數 Latest Score Histories</h3>
                    <div className="statistics-card">
                        <LineChart datas={scoreHistory.slice(-5)}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;

