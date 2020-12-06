import marketData from '../../datas/market_formated.json';
import ethicsData from '../../datas/ethics_formated.json';

var Chance = require('chance');
var chance = new Chance();

type originalQuestion = {
    ans: number;
    qn: string | number;
    title: string;
    category: 'market' | 'ethics' | string;
}

export interface IOption {
    val: number;
    text: string;
};

export interface IformatedQuestion {
    ans: number;
    qn: string | number;
    title?: string;
    options?: IOption[];
    category: 'market' | 'ethics' | string;
}

export const convertQuestionTitleToAnsMapping = (str: string) : {
    title: string;
    options: IOption[]
} | null => {
    // regex can't defined as global variable
    // please search "RegExp.exec() returns NULL sporadically"
    const regex: RegExp = /(.*?)\s*\(1\)(.*?)\s*\(2\)(.*?)\s*\(3\)(.*?)\s*\(4\)(.*?)\s*$/g;
    const match: RegExpExecArray | null = regex.exec(str);
    
    if (!Array.isArray(match)) {
        console.warn(`${str} is invalid question title format`);
        return null;
    }

    let options = [];
    let optionsCounter = 1;
    // index 2 ~ 5 means A, B, C, D
    for (let idx = 2; idx <= 5; idx++) {
        options.push({
            val: optionsCounter,
            // remove \n
            text: match[idx].trim()
        })
        optionsCounter++;
    }

    return {
        title: match[1] || 'no title',
        options
    };
}

export const formatJsonData = (datas: originalQuestion[]) : IformatedQuestion[] => {
    const result = datas.map((d) => {

        const trimedTitle = d.title.replace(/\n/g,' ');

        return {
            ans: Math.abs(d.ans),
            qn: d.qn,
            category: d.category,
            ...convertQuestionTitleToAnsMapping(trimedTitle)
        }
    });
    return result;
}   

const formattedMarketData = formatJsonData(marketData);
const fommattedEthicsData = formatJsonData(ethicsData);

export const getAllQuestion = () => {
    return [...formattedMarketData, ...fommattedEthicsData];
}

export const pickQuestion = (examLib: 'market' | 'ethics' | '*', quantity?: number | null) => {
    let source: any[] = [];
    if (examLib === '*') {
        source = getAllQuestion();
    } else {
        source = examLib === 'market' ? formattedMarketData : fommattedEthicsData;
    }

    if (quantity === null) {
        return source;
    }

    if (quantity && quantity > source.length) {
        return source;       
    }
    
    return chance.pickset(source, quantity);
}

/**
 * Take half of the questions from each of the question json
 * @param quantity 
 */
export const pickHalfHalfQuestion = (quantity: 50 | 100) => {
    const amount = quantity / 2;

    const marketPicked = chance.pickset(formattedMarketData, amount);
    const ethicsPicked = chance.pickset(fommattedEthicsData, amount);

    return [...marketPicked, ...ethicsPicked];
}

