import marketData from '../../datas/market_formated.json';
import ethicsData from '../../datas/ethics_formated.json';

const regex: RegExp = /(.*?)\s*\(1\)(.*?)\s*\(2\)(.*?)\s*\(3\)(.*?)\s*\(4\)(.*?)\s*$/gm;

export const getAllQuestion = () => {
    return [...marketData, ...ethicsData];
}

export const convertQuestionTitleToAnsMapping = (title: string) => {
    const match: RegExpExecArray | null = regex.exec(title);

    let result: {
        title: string;
        options: { val?: string | number; text?: string}[]
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