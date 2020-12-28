import { IformatedQuestion, pickQuestion } from '../helpers/data/index';

export const getHistories = (type: 'market' | 'ethics') => {
    const histories = JSON.parse(window.localStorage.getItem(`${type}-pra-history`) as string);
    if (!histories) {
        return null;
    }

    return histories;
}

export const getWrongQuestions = (type: 'market' | 'ethics') : IformatedQuestion[] => {
    console.log('type', type);
    const allQuestion = pickQuestion(type, null);
    const histories = getHistories(type);
    
    let pickedQuestions: IformatedQuestion[]= [];
    
    if (histories) {
        histories.forEach((h: null | string, index: number) => {
            if (h === "false") {
                pickedQuestions.push(allQuestion[index])
            }
        })    
    }
    
    return pickedQuestions;
}

export const clean = () => {
    window.localStorage.clear();
    window.location.reload();
}