import { getAllQuestion, convertQuestionTitleToAnsMapping } from './index';


test('[Helpers] Get all 1119 questions array', () => {
    const result = getAllQuestion();

    // 1119
    const expectedLength = 504 + 615;

    expect(result).toHaveLength(expectedLength);
});

test('[Helpers] convertQuestionTitleToAnsMapping is expected with 4 ans options', () => {
    const text = `demo question title? (1)ans 1 (2)ans 2 (3)ans 3\n  (4)ans 4`;
    const result = convertQuestionTitleToAnsMapping(text);

    expect(result).toMatchObject({
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

test('[Helpers] convertQuestionTitleToAnsMapping should be null if the string does not meet requirement', () => {
    const text = `demo question title? (1)ans 1 (2)ans 2 (3)ans`;
    const result = convertQuestionTitleToAnsMapping(text);
    expect(result).toBeNull();
});