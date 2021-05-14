import { useState, useEffect, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { pickQuestion } from '../../../helpers/data/index';
import { getData } from '../../../services/index';
import QuestionCard from '../../QuestionCard';

const Practice = () => {
    const { practiceType } = useParams<{ practiceType: QuestionTypes }>();
    
    let defaultIndex = 0;
    if (window.localStorage.getItem(`${practiceType}-pra-history`)) {
        const histories = JSON.parse(window.localStorage.getItem(`${practiceType}-pra-history`) as string);
        const lastIndexOfTrue = histories.lastIndexOf('true');
        const lastIndexOfFalse = histories.lastIndexOf('false');
        if (lastIndexOfFalse > lastIndexOfTrue) {
            defaultIndex = lastIndexOfFalse + 1; 
        } else {
            defaultIndex = lastIndexOfTrue + 1;
        }
    }

    const [data, setData] = useState<FormatedQuestion[]>([]);
    const [currentIndex, updateCurrent] = useState<number>(defaultIndex);
    const [hasSubmit, updateHasSubmit] = useState<boolean>(false);

    useEffect(() => {
        if (practiceType === 'html_css' || practiceType === 'javascript') {
            const fetchData = async () => {
                let datas = await getData(practiceType);
                
                // generate questions by practice type
                setData(pickQuestion(datas, null));
            }
            fetchData();
        } else {
            console.warn('practiceType is wrong');
        }
    }, [practiceType]);

    useEffect(() => {
        if (data.length > 0) {
            if (!window.localStorage.getItem(`${practiceType}-pra-history`)) {
                window.localStorage.setItem(`${practiceType}-pra-history`, JSON.stringify(Array(data.length).fill(null))); 
            }
        }
    }, [practiceType, data]);  

    const resetSubmitRecord = () => {
        // reset hasSubmit to false
        updateHasSubmit(false);
    };

    const prev = (e: SyntheticEvent) => {
        resetSubmitRecord();

        updateCurrent(currentIndex - 1);
    }

    const next = (e: SyntheticEvent) => {
        resetSubmitRecord();
        const newIndex = currentIndex + 1;
        updateCurrent(newIndex);
    }

    const updateAnsArray = (userChooseAns: string | number, questionIndex: number):void => {
        const isCorrect = Number(data[currentIndex].ans) === Number(userChooseAns);
    
        updateHasSubmit(true);

        if (window.localStorage.getItem(`${practiceType}-pra-history`)) {
            const histories = JSON.parse(window.localStorage.getItem(`${practiceType}-pra-history`) as string);
            histories[questionIndex] = String(isCorrect);
            window.localStorage.setItem(`${practiceType}-pra-history`, JSON.stringify(histories)); 
        }
    }

    const promptJump = (e: SyntheticEvent) => {
        e.preventDefault();
        jumpTo((window as any).prompt('直接移動到第幾題?'));
    }

    const jumpTo = (goto: number) => {
        if (!goto) {
            return;
        }
        
        if (isNaN(goto)) {
            return alert('很抱歉，請輸入正確的題號');
        }
        
        resetSubmitRecord();
        
        let updateCurrentNum = Number(goto) - 1;

        if (Number(goto) <= 0) {    
            updateCurrentNum = 0;
        } else if (Number(goto) > data.length) {
            updateCurrentNum = data.length - 1;
        }
        return updateCurrent(updateCurrentNum);
    }

    const pager = (
        <div className="ans-btn-fixed">
            <div className="container max-width-700">
                <div className="row">
                    <div className="col-6 text-left">
                        <button className="ans-btn" data-testid="prev-btn" onClick={(e) => prev(e)} disabled={currentIndex <= 0}>上一題 Prev</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="ans-btn" data-testid="next-btn" onClick={(e) => next(e)} disabled={currentIndex + 1  > data.length}>下一題 Next</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const currentQuestion = data?.[currentIndex] ?? null;
  
    let renderContent = null;
    if (data.length === 0) {
        renderContent = (<div className="text-center" data-testid="loading">Loading</div>);
    } else if (currentIndex >= data.length) {
        renderContent = (
            <div className="text-center">
                <div data-testid="empty-content">
                    沒有題目了
                </div>
                <span className="btn" data-testid="reset-currentindex" onClick={() => jumpTo(1)}>回到第一題</span>
            </div>);
    } else {
        renderContent = (
            <>
                <nav className="navbar p-0 mb-3">
                    <div data-testid="pra-heading">考題練習 {currentIndex + 1}/{data.length}</div>
                    <button className="btn btn-outline-primary btn-sm pt-0 pb-0" data-testid="jump-btn" onClick={promptJump}>移至</button>
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
            </>
        )
    }

    return (
        <div className="container max-width-700 mt-3 mb-5">
            { renderContent }
            { pager }
        </div>
    );
}

export default Practice;

