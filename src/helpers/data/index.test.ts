import { formatJsonData, getAllQuestion, convertQuestionTitleToAnsMapping, pickQuestion, pickHalfHalfQuestion } from './index';

let originalWarn: any;

beforeAll(() => {
    originalWarn = global.console.warn;
    // mock console.warn
    global.console.warn = jest.fn();
});

afterAll(() => {
    // revert original warn
    global.console.warn = originalWarn;
});

describe('[Helpers]', () => {
    test('[getAllQuestion] get all 1119 questions array', () => {
        const result = getAllQuestion();
    
        // 1119
        const expectedLength = 504 + 615;
    
        expect(result).toHaveLength(expectedLength);
    });
    
    test('[pickQuestion] pick 50 Question from market', () => {
        const result = pickQuestion('market', 50);
        expect(result).toHaveLength(50);
    });
    
    test('[pickQuestion] pick 5 Question from ethics', () => {
        const result = pickQuestion('ethics', 5);
        expect(result).toHaveLength(5);
    });
    
    test('[pickQuestion] pick 100 Question from both market and ethics', () => {
        const result = pickQuestion('*', 100);
        expect(result).toHaveLength(100);
    });
    
    test('[pickQuestion] pickQuestion quantity value could not greater than real data length', () => {
        const result = pickQuestion('market', 1000);
        expect(result).toHaveLength(504);
    });
    
    test('[pickHalfHalfQuestion] get 50 market and 50 ethics', () => {
        const result = pickHalfHalfQuestion(100);
        expect(result).toHaveLength(100);
    });
    
    test('[convertQuestionTitleToAnsMapping] is expected with 4 ans options', () => {
        const str = `demo question title? (1)ans 1 (2)ans 2 (3)ans 3\n  (4)ans 4`;
        const result2 = convertQuestionTitleToAnsMapping(str);
    

        expect(result2).toMatchObject({
            title: 'demo question title?',
            options: [
                {
                    val: 1,
                    text: 'ans 1'
                },
                {
                    val: 2,
                    text: 'ans 2'
                },
                {
                    val: 3,
                    text: 'ans 3'
                },
                {
                    val: 4,
                    text: 'ans 4'
                }
            ]
        })
    });
    
    test('[convertQuestionTitleToAnsMapping] should be null if the string does not meet requirement', () => {
        const text = `demo question title? (1)ans 1 (2)ans 2 (3)ans`;
        const result = convertQuestionTitleToAnsMapping(text);
        expect(result).toBeNull();
        expect(global.console.warn).toHaveBeenCalledWith(`${text} is invalid question title format`);
    });

    test('formatJsonData', () => {
        const formatted = formatJsonData([{
            ans: -2,
            qn: 119,
            title: "下列敘述何者為正確？\n (1)test (2)test2 (3)test3 (4)test4",
            category: 'ethics'
        }]);
    
        const firstItem = formatted[0];
        expect(firstItem).toMatchObject({
            ans: 2,
            qn: 119,
            category: 'ethics',
            title: '下列敘述何者為正確？',
            options: [
                { val: 1, text: 'test' },
                { val: 2, text: 'test2' },
                { val: 3, text: 'test3' },
                { val: 4, text: 'test4' }
            ]
        })
    });
})

