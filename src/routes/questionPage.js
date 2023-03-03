import Typea from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typea.js';
import Typec from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typec.js';
import Typeb from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typeb.js';

import CommonObject from '../component/dealingQuestion/makeQpage.js/common';
import {QuestionNum} from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/makeQpage.js/nextQuestion.js'

import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';
import App from '../App';
import { useState, useEffect } from 'react';


// let questionType= ReadingCsv().then((res)=>res[QuestionNum()]).then((result)=> {return result[0]});

function QuestionPage(){
    const [questionType, setQuestionType]= useState(null);

    useEffect(()=>{
        async function getData(){
            const res= await ReadingCsv()
            const data= await res[QuestionNum()]
            setQuestionType(data[0])
        }
        getData()
    },[]);
    if (questionType==='a') {
        // typeA
        return (
            <div>
                <CommonObject/>
                <Typea/>
            </div>
        )
    } else if(questionType==='b') {
        // typeB
        return(
            <div>
                <CommonObject/>
                <Typeb/>
            </div>
        )
    } else if (questionType==='c') {
        return (
            <div>
                <CommonObject/>
                <Typec/>
            </div>
            
        )
    } else {
        return (
            <div>
                <h1>{`${questionType}: questionType is wrong.`}</h1>
                <p>{`${typeof(questionType)}: questionType's data type`}</p>
            </div>
        )
    }
    
}

export default QuestionPage;