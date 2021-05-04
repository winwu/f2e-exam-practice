import { useState, SyntheticEvent } from 'react';

const useNavigate = (initialIndex: number, clearHasSubmit: Function) => {
    const [length, setLength] = useState<number>(0);
    const [index, setIndex] = useState<number>(initialIndex);
    
    const prev = (e: SyntheticEvent) => {
        e.preventDefault();
        
        // reset hasSubmit to false
        clearHasSubmit();
        setIndex(prevIndex => prevIndex - 1);
    }

    const next = (e: SyntheticEvent) => {
        e.preventDefault();
        
        // reset hasSubmit to false
        clearHasSubmit();
        setIndex(prevIndex => prevIndex + 1);
    }

    const navigateBody = (
        <div className="ans-btn-fixed">
            <div className="container max-width-700">
                <div className="row">
                    <div className="col-6 text-left">
                        <button className="ans-btn" 
                            data-testid="prev-btn"
                            onClick={(e) => prev(e)}
                            disabled={index <= 0}>上一題 Prev</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="ans-btn"
                            data-testid="next-btn"
                            onClick={(e) => next(e)}
                            disabled={index +1 === length}>下一題 Next</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return {navigateBody, index, setLength};
}

export default useNavigate;