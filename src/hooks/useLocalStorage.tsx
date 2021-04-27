import { useState, useEffect } from 'react';

const getValue = (key: string, initialValue: string | number | any[]| Function): any => {
    const content = window.localStorage.getItem(key);
    if (content) {
        console.log('hook content', content);
        console.log('hook JSON.parse(content)', JSON.parse(content));
        return JSON.parse(content);
    }
    if (initialValue instanceof Function) {
        return initialValue();
    }
    return initialValue;
};

const useLocalStorage = (key: string, initialValue: string | number | any[] | Function) => {
    const [value, setValue] = useState(() => {
    //     // 這邊用 function 目的要希望只會 called 一次，只需要從 localstorage 拿到 initial value
        return getValue(key, initialValue);
    });
    // const [value, setValue] = useState(() => getValue(key, initialValue));

    useEffect(() => {
        // only when value changed, save value in localStorage
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    return [value, setValue];
}

export default useLocalStorage;