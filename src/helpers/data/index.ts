var Chance = require('chance');
var chance = new Chance();

export const pickQuestion = (datas: any[], quantity?: number | null) => {
    if (quantity === null) {
        return datas;
    }

    if (quantity && quantity > datas.length) {
        return datas;
    }
    
    return chance.pickset(datas, quantity);
}

export const pickHalfHalfQuestion = (datas: { htmlcss: any[], javascript: any[]}, quantity: number) => {
    const amount = quantity / 2;

    const marketPicked = chance.pickset(datas.htmlcss, amount);
    const ethicsPicked = chance.pickset(datas.javascript, amount);

    return [...marketPicked, ...ethicsPicked];
}

