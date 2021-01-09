import { IformatedQuestion, pickQuestion } from '../helpers/data/index';

type questionList = 'market' | 'ethics';

export const getHistories = (type: questionList) => {
    const histories = JSON.parse(window.localStorage.getItem(`${type}-pra-history`) as string);
    if (!histories) {
        return null;
    }

    return histories;
}

export const getWrongQuestions = (type: questionList) : IformatedQuestion[] => {
    const allQuestion = pickQuestion(type, null);
    const histories = getHistories(type);
    
    let pickedQuestions: IformatedQuestion[]= [];
    
    if (histories) {
        histories.forEach((h: null | string, index: number) => {
            if (h === "false") {
                pickedQuestions.push(allQuestion[index])
            }
        });
    }
    
    return pickedQuestions;
}

export const getBookmarks = () => {
    const bookmarks = JSON.parse(window.localStorage.getItem('bookmarks') as string);
    if (!bookmarks) {
        const defaultBookmark = {
            market: [],
            ethics: []
        };

        window.localStorage.setItem('bookmarks', JSON.stringify(defaultBookmark));

        return defaultBookmark;
    }
    return bookmarks;
}

export const setBookmark = (type: questionList, qn: number) => {
    const bookmarks = getBookmarks();
    
    if (!bookmarks[type].includes(qn)) {
        bookmarks[type].push(qn);
        bookmarks[type].sort((a: number, b: number) => a - b);
        window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
}

export const removeBookmark = (type: questionList, qn: number) => {
    const bookmarks = getBookmarks();
    
    let typeOfBookmarks = bookmarks[type];
    typeOfBookmarks = typeOfBookmarks.filter((q: number) => q !== qn);
    
    bookmarks[type] = typeOfBookmarks.sort((a: number, b: number) => a - b);
    
    window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

export const getIsBookmarked = (type: questionList, qn: number) => {
    const bookmarks = getBookmarks();
    return bookmarks[type] && bookmarks[type].includes(qn) ? true : false;
}

export const getBookmarkedList = () : IformatedQuestion[] => {
    const { market = [], ethics = [] } = getBookmarks();
    const marketQuestions = pickQuestion('market', null);
    const ethicsQuestions = pickQuestion('ethics', null);
    const filteredMarket = marketQuestions.filter((i: IformatedQuestion) => market.includes(i.qn));
    const filteredEthics = ethicsQuestions.filter((i: IformatedQuestion) => ethics.includes(i.qn));
    return [...filteredMarket, ...filteredEthics];
}

export const clean = () => {
    window.localStorage.clear();
    window.location.reload();
}