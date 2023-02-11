import {Link} from 'react-router-dom';
import Typea from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typea.js';
import Typec from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typec.js';
import Typeb from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typeb.js';
import ReadingCsv from '../component/dealingQuestion/readingcsv';
import CommonObject from '../component/dealingQuestion/makeQpage.js/common';

let questionType= ReadingCsv().then((res)=>questionType=res[1].slice(0,-1).join())
// 비동기를 잘 이해하고 있는 것이 매우 중요하구나....

function QuestionPage(){
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