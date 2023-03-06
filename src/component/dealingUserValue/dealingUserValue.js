import { useState, useEffect } from 'react';
import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';


async function DealingUserValue(userValue){ // 요기서도 react hook을 못 씀 ㅠㅠ

    // user의 값을 stroage에 저장함.

    const userValueStorage=[] // array 순서가 문제의 순서임.
    userValueStorage.push(userValue);
    
    // storage에 저장된 값을 토대로 다음 질문 번호를 return함.
    const CsvData=await ReadingCsv()
    let questionNum=0;

    // 값 유효성 검사(실제로 옳바르게 저장되어 있는지 정해진 타입이 잘 들어가 있는지 등)는 나중에 만듬.
    if(userValueStorage[questionNum]!==undefined){ //questionNUm에 해당하는 userValueStorage의 값이 존재할 때
        questionNum=questionNum+1
        console.log(questionNum)
    }

    return(
        questionNum
    )
}

export default DealingUserValue;
