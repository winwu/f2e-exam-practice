declare type QuestionTypes = 'html_css' | 'javascript';

declare interface IOption {
    val: number;
    text: string;
};


declare type FormatedQuestion = {
    ans: number;
    qn: string | number;
    category: QuestionTypes;
    title: string;
    options?: IOption[];
}

declare type OriginalQuestion = Pick<FormatedQuestion, 'ans' | 'qn' | 'title' | 'category'>;