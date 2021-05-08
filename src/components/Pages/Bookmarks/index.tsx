import { useState, useEffect } from 'react';
import { getBookmarkedList } from '../../../services'; 
import QuestionCard from '../../QuestionCard';
import useNavigate from '../../../hooks/useNavigate';

const Bookmarks = () => {
    const [data, setData] = useState<FormatedQuestion[]>([]);
    const [hasSubmit, updateHasSubmit] = useState<boolean>(false);

    const {navigateBody, index: curIndex, setLength} = useNavigate(0, () => {
        updateHasSubmit(false);
    });
  
    useEffect(() => {
        const fetchData = async () => {
            let databookmarkedQuestionss = await getBookmarkedList();
            setData(databookmarkedQuestionss);
            setLength(databookmarkedQuestionss.length);
        }
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const updateAnsArray = (/* userChooseAns: string | number, questionIndex: number */):void => {
        // const isCorrect = Number(data[currentIndex].ans) === Number(userChooseAns);
        updateHasSubmit(true);
    }

    const currentQuestion = data?.[curIndex] ?? null;
  
    let renderContent = null;

    if (data.length === 0) {
        renderContent = (<div className="text-center m-4" data-testid="no-bookmarks">尚未存有書籤的題目</div>);
    } else {
        renderContent = (
            <div className="container max-width-700 mt-3 mb-5">
                <nav className="navbar navbar-light" data-testid="navbar">
                    <div data-testid="pra-heading">我的書籤 {curIndex + 1}/{data.length}</div>
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
                {navigateBody}
            </div>
        )
    }

    return renderContent;
}

export default Bookmarks;

