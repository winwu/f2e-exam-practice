var Chance = require('chance');
var chance = new Chance();

import marketData from '../../datas/market_formated.json';
import ethicsData from '../../datas/ethics_formated.json';

const regex: RegExp = /(.*?)\s*\(1\)(.*?)\s*\(2\)(.*?)\s*\(3\)(.*?)\s*\(4\)(.*?)\s*$/gm;

interface IOption {
    val: number;
    text: string;
};

type originalQuestion = {
    ans: number;
    qn: string | number;
    title: string;
    category: 'market' | 'ethics'
}

type formatedQuestion = {
    ans: number;
    qn: string | number;
    title?: string;
    options?: IOption[];
    category: 'market' | 'ethics'
}

export const formatJsonData = (datas: originalQuestion[]) : formatedQuestion[] => {
    const result = datas.map((d) => {
        return {
            ans: Math.abs(d.ans),
            qn: d.qn,
            category: d.category,
            ...convertQuestionTitleToAnsMapping(d.title)
        }
    });
    return result;
}   

export const getAllQuestion = () => {
    return [...marketData, ...ethicsData];
}

export const pickQuestion = (examLib: 'market' | 'ethics' | '*', quantity?: number | null) => {
    let source: any[] = [];
    if (examLib === '*') {
        source = getAllQuestion();
    } else {
        source = examLib === 'market' ? marketData : ethicsData;
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

    const marketPicked = chance.pickset(marketData, amount);
    const ethicsPicked = chance.pickset(ethicsData, amount);

    return [...marketPicked, ...ethicsPicked];
}

export const convertQuestionTitleToAnsMapping = (title: string) : {
    title: string;
    options: IOption[]
} | null => {
    const match: RegExpExecArray | null = regex.exec(title);

    let result: {
        title: string;
        options: IOption[]
    } | null = null;

    if (Array.isArray(match)) {
        let options = [];
        let optionsCounter = 1;
        for (let idx = 2; idx <= match.length; idx++) {
            if (match[idx]) {
                options.push({
                    val: optionsCounter,
                    // remove \n
                    text: match[idx].trim()
                })
                optionsCounter++;
            }
        }
        result = {
            title:  match[1],
            options
        }
    }
    return result;
}