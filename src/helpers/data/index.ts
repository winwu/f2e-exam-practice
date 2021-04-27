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

export const pickHalfHalfQuestion = (datas: { market: any[], ethics: any[]}, quantity: 50 | 100) => {
    const amount = quantity / 2;

    const marketPicked = chance.pickset(datas.market, amount);
    const ethicsPicked = chance.pickset(datas.ethics, amount);

    return [...marketPicked, ...ethicsPicked];
}

