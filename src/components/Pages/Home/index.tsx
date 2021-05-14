import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LineChart from '../../Charts/Line';
import ProgressLine from '../../Charts/ProgressLine';
import { getHistories, getWrongQuestions } from '../../../services';
import useLocalStorage from '../../../hooks/useLocalStorage';

const categoryMap: { [p in QuestionTypes]: string } = {
    html_css: 'HTML/CSS',
    javascript: 'JavaScript'
};

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

    const getAnalytics = (type: QuestionTypes, resultType: 'percentage' | 'totalCount') => {
        const histories = getHistories(type);
    
        if (!histories) {
            return 0;
        }

        const finishCount = histories.filter((d: null | string) => d !== null).length;

        if (resultType === 'percentage') {
            const totalCount = histories.length;
            return Math.round((finishCount/totalCount) * 100)
        } else {
            return finishCount;
        }
    }

    const marketPercentage = getAnalytics('html_css', 'percentage');
    const ethicsPercentage = getAnalytics('javascript', 'percentage');
    
    let reviewItems = [];
    
    let practiceLinks: JSX.Element[] = [];
    for (let pageOfCategory in categoryMap) {
        practiceLinks.push(
            <div className="col-6" key={pageOfCategory}>
                <Link to={`/practice/${pageOfCategory}`} className="ans-btn practice-bg">{(categoryMap as any)[pageOfCategory]}</Link>
            </div>
        );
    }
    

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
                        {practiceLinks}
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
                            <dd>{ getAnalytics('html_css', 'totalCount') }</dd>
                        </dl>
                    </div>
                    <div className="progress-line-wrap">
                        <div className="progress-line-item">JavaScript</div>
                        <ProgressLine percentage={ethicsPercentage} fillColor='#8c682f'/>
                        <dl className="progress-finished-dl">
                            <dt>已作答</dt>
                            <dd>{ getAnalytics('javascript', 'totalCount') }</dd>
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

