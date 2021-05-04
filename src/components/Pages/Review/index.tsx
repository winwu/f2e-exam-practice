import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWrongQuestions } from '../../../services'; 
import QuestionCard from '../../QuestionCard';
import useNavigate from '../../../hooks/useNavigate';

const Review = () => {
    const { practiceType } = useParams<{ practiceType: QuestionTypes }>();
    const [data, setData] = useState<FormatedQuestion[]>([]);
    const [hasSubmit, updateHasSubmit] = useState<boolean>(false);
    
    const {navigateBody, index: curIndex, setLength} = useNavigate(0, () => {
        updateHasSubmit(false);
    });

    useEffect(() => {
        if (practiceType === 'html_css' || practiceType === 'javascript') {
            const fetchData = async () => {
                const pickedQuestions = await getWrongQuestions(practiceType);
                setData(pickedQuestions);
                setLength(pickedQuestions.length);
            }
            fetchData();
        } else {
            console.warn('practiceType is wrong');
        }
    }, [practiceType]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateAnsArray = (/* userChooseAns: string | number, questionIndex: number */):void => {
        // const isCorrect = Number(data[currentIndex].ans) === Number(userChooseAns);
        updateHasSubmit(true);
    }

    const currentQuestion = data?.[curIndex] ?? null;
  
    let renderContent = null;

    if (data.length === 0) {
        renderContent = (<div className="text-center m-4" data-testid="no-reviews">尚未存有答錯的題目</div>);
    } else {
        renderContent = (
            <div className="container max-width-700 mt-3 mb-5">
                <nav className="navbar navbar-light" data-testid="navbar">
                    <div data-testid="pra-heading">複習錯誤題目 {curIndex + 1}/{data.length}</div>
                </nav>
                <div className="exams-wrap">
                    <QuestionCard
                        key={curIndex}
                        seq={curIndex}
                        data={currentQuestion}
                        haveSubmitted={hasSubmit}
                        onAnsChanged={updateAnsArray}
                    />
                </div>
                { navigateBody }
            </div>
        )
    }

    return renderContent;
}

export default Review;

